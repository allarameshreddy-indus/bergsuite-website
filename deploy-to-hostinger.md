# 🚀 Deploy Horizons Project to Hostinger

## 📋 Prerequisites
- Hostinger hosting account with domain
- GitHub repository: https://github.com/allarameshreddy-cloud/School
- Node.js hosting plan (if you need backend functionality)

## 🔧 Setup Steps

### Step 1: Prepare Your Build Files
Your project builds to the `dist/` folder with these files:
- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript files
- `.htaccess` - Apache configuration

### Step 2: Hostinger Deployment Options

#### Option A: Manual Upload (Recommended for Static Sites)
1. **Login to Hostinger Control Panel**
2. **Go to File Manager**
3. **Navigate to `public_html/` folder**
4. **Upload all files from `dist/` folder**
5. **Your site will be live at your domain**

#### Option B: Git Integration (Automatic Deployment)
1. **In Hostinger Control Panel:**
   - Go to "Git" section
   - Connect your GitHub repository
   - Set up webhook for automatic deployment

#### Option C: Node.js Hosting (For Full Stack)
If you need the backend server:
1. **Upgrade to Node.js hosting plan**
2. **Connect GitHub repository**
3. **Set build command:** `npm run build`
4. **Set start command:** `npm start`

### Step 3: Environment Variables (If Needed)
If your app needs environment variables:
1. **In Hostinger Control Panel:**
   - Go to "Environment Variables"
   - Add your `.env` variables

### Step 4: Domain Configuration
1. **Point your domain to Hostinger nameservers**
2. **Set up SSL certificate (free with Hostinger)**
3. **Configure redirects if needed**

## 🔄 Automatic Deployment Setup

### GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Hostinger
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to Hostinger
      uses: easingthemes/ssh-deploy@main
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
        REMOTE_USER: ${{ secrets.REMOTE_USER }}
        SOURCE: "dist/"
        TARGET: "/public_html/"
```

## 📁 File Structure for Hostinger
```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-3409e98e.css
    └── index-ca399e37.js
```

## 🔧 Customization

### Update .htaccess for React Router
If you add routing later, update `.htaccess`:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 🚀 Quick Deploy Commands

### Build and Upload
```bash
# Build the project
npm run build

# Upload dist/ folder contents to Hostinger public_html/
```

### Update Process
1. Make changes to your code
2. Commit and push to GitHub
3. Build: `npm run build`
4. Upload new `dist/` contents to Hostinger

## 📞 Support
- Hostinger Support: https://support.hostinger.com
- GitHub Repository: https://github.com/allarameshreddy-cloud/School

## ✅ Checklist
- [ ] Build project successfully
- [ ] Upload files to Hostinger
- [ ] Configure domain
- [ ] Set up SSL certificate
- [ ] Test website functionality
- [ ] Set up automatic deployment (optional) 