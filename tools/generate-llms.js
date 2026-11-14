#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const CLEAN_CONTENT_REGEX = {
  comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
  templateLiterals: /`[\s\S]*?`/g,
  strings: /'[^']*'|"[^"]*"/g,
  jsxExpressions: /\{.*?\}/g,
  htmlEntities: {
    quot: /&quot;/g,
    amp: /&amp;/g,
    lt: /&lt;/g,
    gt: /&gt;/g,
    apos: /&apos;/g
  }
};

const EXTRACTION_REGEX = {
  route: /<Route\s+[^>]*>/g,
  path: /path=["']([^"']+)["']/,
  element: /element=\{<(\w+)[^}]*\/?\s*>\}/,
  helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
  helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
  title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
  description: /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i
};

function cleanContent(content) {
  return content
    .replace(CLEAN_CONTENT_REGEX.comments, '')
    .replace(CLEAN_CONTENT_REGEX.templateLiterals, '""')
    .replace(CLEAN_CONTENT_REGEX.strings, '""');
}

function cleanText(text) {
  if (!text) return text;
  
  return text
    .replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
    .trim();
}

function extractRoutes(appJsxPath) {
  if (!fs.existsSync(appJsxPath)) return new Map();

  try {
    const content = fs.readFileSync(appJsxPath, 'utf8');
    const routes = new Map();
    const routeMatches = [...content.matchAll(EXTRACTION_REGEX.route)];
    
    for (const match of routeMatches) {
      const routeTag = match[0];
      const pathMatch = routeTag.match(EXTRACTION_REGEX.path);
      const elementMatch = routeTag.match(EXTRACTION_REGEX.element);
      const isIndex = routeTag.includes('index');
      
      if (elementMatch) {
        const componentName = elementMatch[1];
        let routePath;
        
        if (isIndex) {
          routePath = '/';
        } else if (pathMatch) {
          routePath = pathMatch[1].startsWith('/') ? pathMatch[1] : `/${pathMatch[1]}`;
        }
        
        routes.set(componentName, routePath);
      }
    }

    return routes;
  } catch (error) {
    return new Map();
  }
}

function findReactFiles(dir) {
  return fs.readdirSync(dir).map(item => path.join(dir, item));
}

function extractHelmetData(content, filePath, routes) {
  const cleanedContent = cleanContent(content);
  
  if (!EXTRACTION_REGEX.helmetTest.test(cleanedContent)) {
    return null;
  }
  
  const helmetMatch = content.match(EXTRACTION_REGEX.helmet);
  if (!helmetMatch) return null;
  
  const helmetContent = helmetMatch[1];
  const titleMatch = helmetContent.match(EXTRACTION_REGEX.title);
  const descMatch = helmetContent.match(EXTRACTION_REGEX.description);
  
  const fileName = path.basename(filePath, path.extname(filePath));
  let title = cleanText(titleMatch?.[1]);
  if (!title || /[{}`]/.test(title)) {
    const fallbackTitles = {
      Home: "Bergsuite Infotech Pvt Ltd",
      About: "About · Bergsuite Infotech Pvt Ltd",
      Services: "Services · Bergsuite Infotech Pvt Ltd",
      ServiceDetail: "Service · Bergsuite Infotech Pvt Ltd",
      Products: "Products · Bergsuite Infotech Pvt Ltd",
      ProductDetail: "Product · Bergsuite Infotech Pvt Ltd",
      Industries: "Industries · Bergsuite Infotech Pvt Ltd",
      IndustryDetail: "Industry · Bergsuite Infotech Pvt Ltd",
      Careers: "Careers · Bergsuite Infotech Pvt Ltd",
      JobDetail: "Role · Bergsuite Infotech Pvt Ltd",
      Contact: "Contact · Bergsuite Infotech Pvt Ltd",
      Quote: "Get a Quote · Bergsuite Infotech Pvt Ltd",
      CompanyVideo: "Company video · Bergsuite Infotech Pvt Ltd",
      NotFound: "Page not found · Bergsuite Infotech Pvt Ltd",
    };
    title = fallbackTitles[fileName] || "Bergsuite Infotech Pvt Ltd";
  }
  let description = cleanText(descMatch?.[1]);
  if (!description || /[{}`]/.test(description)) {
    description = "Bergsuite Infotech Pvt Ltd builds products and consulting engagements in AI, data, cloud, and modern digital solutions.";
  }
  
  const url = routes instanceof Map && routes.has(fileName)
    ? routes.get(fileName)
    : generateFallbackUrl(fileName);
  
  return {
    url,
    title: title || 'Untitled Page',
    description: description || 'No description available'
  };
}

function generateFallbackUrl(fileName) {
  const known = {
    Home: "/",
    About: "/about",
    Services: "/services",
    ServiceDetail: "/services",
    Products: "/products",
    ProductDetail: "/products",
    Industries: "/industries",
    IndustryDetail: "/industries",
    Careers: "/careers",
    JobDetail: "/careers",
    Contact: "/contact",
    Quote: "/quote",
    CompanyVideo: "/company-video",
    NotFound: "/404",
  };
  if (known[fileName]) return known[fileName];
  const cleanName = fileName.replace(/Page$/, "").toLowerCase();
  return cleanName === "app" || cleanName === "home" ? "/" : `/${cleanName}`;
}

function generateLlmsTxt(pages) {
  const sortedPages = pages.sort((a, b) => a.title.localeCompare(b.title));
  const pageEntries = sortedPages.map(page => 
    `- [${page.title}](${page.url}): ${page.description}`
  ).join('\n');
  
  return `## Pages\n${pageEntries}`;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function processPageFile(filePath, routes) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return extractHelmetData(content, filePath, routes);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

function main() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');

  let pages = [];
  
  if (!fs.existsSync(pagesDir)) {
    pages.push(processPageFile(appJsxPath, []));
  } else {
    const routes = extractRoutes(appJsxPath);
    const reactFiles = findReactFiles(pagesDir);

    pages = reactFiles
      .map(filePath => processPageFile(filePath, routes))
      .filter(Boolean);
    
    if (pages.length === 0) {
      console.error('❌ No pages with Helmet components found!');
      process.exit(1);
    }
  }


  const llmsTxtContent = generateLlmsTxt(pages);
  const outputPath = path.join(process.cwd(), 'public', 'llms.txt');
  
  ensureDirectoryExists(path.dirname(outputPath));
  fs.writeFileSync(outputPath, llmsTxtContent, 'utf8');
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main();
}
