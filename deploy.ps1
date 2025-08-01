# Horizons Project Deployment Script for Hostinger
Write-Host "🚀 Horizons Project - Hostinger Deployment" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""

# Step 1: Build the project
Write-Host "📦 Step 1: Building the project..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
} catch {
    Write-Host "❌ Build failed: $_" -ForegroundColor Red
    exit 1
}

# Step 2: Check if dist folder exists
if (-not (Test-Path "dist")) {
    Write-Host "❌ Error: dist folder not found after build!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📁 Step 2: Build files ready in dist/ folder:" -ForegroundColor Yellow
Get-ChildItem -Path "dist" -Recurse | ForEach-Object {
    Write-Host "   $($_.FullName.Replace((Get-Location).Path + '\dist\', ''))" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🌐 Step 3: Deploy to Hostinger" -ForegroundColor Yellow
Write-Host "=============================================" -ForegroundColor Green
Write-Host "1. Login to Hostinger Control Panel" -ForegroundColor Cyan
Write-Host "2. Go to 'File Manager'" -ForegroundColor Cyan
Write-Host "3. Navigate to 'public_html/' folder" -ForegroundColor Cyan
Write-Host "4. Delete all existing files (backup first if needed)" -ForegroundColor Cyan
Write-Host "5. Upload all files from the 'dist/' folder" -ForegroundColor Cyan
Write-Host "6. Your site will be live at your domain!" -ForegroundColor Green

Write-Host ""
Write-Host "📋 Files to upload:" -ForegroundColor Yellow
Write-Host "- index.html" -ForegroundColor Cyan
Write-Host "- .htaccess" -ForegroundColor Cyan
Write-Host "- assets/ folder (with all CSS and JS files)" -ForegroundColor Cyan

Write-Host ""
Write-Host "🔧 Optional: Set up automatic deployment" -ForegroundColor Yellow
Write-Host "1. In Hostinger Control Panel, go to 'Git'" -ForegroundColor Cyan
Write-Host "2. Connect your GitHub repository: https://github.com/allarameshreddy-cloud/School" -ForegroundColor Cyan
Write-Host "3. Set up webhook for automatic deployment" -ForegroundColor Cyan

Write-Host ""
Write-Host "✅ Deployment guide completed!" -ForegroundColor Green
Write-Host "Your horizons project is ready to go live on Hostinger!" -ForegroundColor Green

Write-Host ""
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 