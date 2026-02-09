# Nexus-Commerce Git Setup Script
# Run this script after resolving OneDrive file locks

Write-Host "Setting up Git repository for Nexus-Commerce..." -ForegroundColor Green

# Remove lock files if they exist
if (Test-Path .git\config.lock) {
    Write-Host "Removing config.lock..." -ForegroundColor Yellow
    Remove-Item -Force .git\config.lock -ErrorAction SilentlyContinue
}

# Initialize git repository (if not already initialized)
if (-not (Test-Path .git\config)) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add remote if it doesn't exist
$remoteExists = git remote get-url origin 2>$null
if (-not $remoteExists) {
    Write-Host "Adding remote origin..." -ForegroundColor Yellow
    git remote add origin https://github.com/achalcipher/Nexus-Commerce.git
} else {
    Write-Host "Remote already exists, updating..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/achalcipher/Nexus-Commerce.git
}

# Stage all files
Write-Host "Staging files..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Nexus-Commerce unified structure

- Merged frontend (opencart) and backend (ecom-back) repositories
- Added Kubernetes manifests for production deployment
- Configured CI/CD pipeline with GitHub Actions
- Implemented Atomic Design architecture
- Added persistent state management with React Context and MongoDB"

# Force push to master
Write-Host "Force pushing to master branch..." -ForegroundColor Yellow
Write-Host "WARNING: This will overwrite any existing content on the remote master branch!" -ForegroundColor Red
git push -f origin master

Write-Host "`nGit setup complete!" -ForegroundColor Green
Write-Host "Repository URL: https://github.com/achalcipher/Nexus-Commerce.git" -ForegroundColor Cyan