# GitHub Setup Script for Horizons Project
Write-Host "🚀 Setting up GitHub connection for your Horizons project..." -ForegroundColor Green
Write-Host ""

# Step 1: Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: Not in a git repository. Please run 'git init' first." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Git repository found!" -ForegroundColor Green

# Step 2: Instructions for creating GitHub repository
Write-Host ""
Write-Host "📋 STEP 1: Create GitHub Repository" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/new" -ForegroundColor Cyan
Write-Host "2. Repository name: horizons-visual-editor" -ForegroundColor Cyan
Write-Host "3. Description: React-based visual editor with inline editing capabilities" -ForegroundColor Cyan
Write-Host "4. Make it Public or Private (your choice)" -ForegroundColor Cyan
Write-Host "5. DO NOT check 'Add a README file'" -ForegroundColor Cyan
Write-Host "6. Click 'Create repository'" -ForegroundColor Cyan
Write-Host ""

# Step 3: Instructions for Personal Access Token
Write-Host "🔐 STEP 2: Create Personal Access Token" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/settings/tokens" -ForegroundColor Cyan
Write-Host "2. Click 'Generate new token (classic)'" -ForegroundColor Cyan
Write-Host "3. Note: horizons-project" -ForegroundColor Cyan
Write-Host "4. Expiration: 90 days" -ForegroundColor Cyan
Write-Host "5. Scopes: Check 'repo'" -ForegroundColor Cyan
Write-Host "6. Click 'Generate token'" -ForegroundColor Cyan
Write-Host "7. COPY THE TOKEN (you'll only see it once!)" -ForegroundColor Red
Write-Host ""

# Step 4: Get user input
Write-Host "📝 STEP 3: Enter Repository Details" -ForegroundColor Yellow
$repoUrl = Read-Host "Enter your GitHub repository URL"

if ($repoUrl -eq "") {
    Write-Host "❌ Repository URL is required!" -ForegroundColor Red
    exit 1
}

# Step 5: Add remote and push
Write-Host ""
Write-Host "🔗 STEP 4: Connecting to GitHub..." -ForegroundColor Yellow

try {
    # Add remote origin
    git remote add origin $repoUrl
    Write-Host "✅ Remote origin added!" -ForegroundColor Green
    
    # Rename branch to main
    git branch -M main
    Write-Host "✅ Branch renamed to main!" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "🚀 STEP 5: Pushing to GitHub..." -ForegroundColor Yellow
    Write-Host "When prompted for password, use your Personal Access Token (not your GitHub password)" -ForegroundColor Cyan
    Write-Host ""
    
    # Push to GitHub
    git push -u origin main
    
    Write-Host ""
    Write-Host "🎉 SUCCESS! Your Horizons project is now on GitHub!" -ForegroundColor Green
    Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan
    
} catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "If you get authentication errors:" -ForegroundColor Yellow
    Write-Host "1. Make sure you're using your Personal Access Token as password" -ForegroundColor Cyan
    Write-Host "2. Make sure the repository URL is correct" -ForegroundColor Cyan
    Write-Host "3. Make sure you have the 'repo' scope in your token" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 