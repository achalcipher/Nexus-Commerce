# Nexus-Commerce Setup Instructions

## Important: OneDrive File Lock Issue

Due to OneDrive file synchronization, some `.git` folders may be locked. Follow these steps to complete the setup:

### Step 1: Resolve OneDrive Locks

**Option A: Pause OneDrive Sync Temporarily**
1. Right-click OneDrive icon in system tray
2. Select "Pause syncing" → "2 hours"
3. Retry git operations

**Option B: Manually Delete .git Folders**
1. Close all applications using git (VS Code, Git GUI, etc.)
2. Navigate to `frontend/` and `backend/` folders
3. Delete `.git` folders manually (may require admin rights)
4. Empty Recycle Bin to fully remove

**Option C: Use Git Bash or Command Prompt**
- Sometimes PowerShell has issues with OneDrive locks
- Try using Git Bash or regular Command Prompt instead

### Step 2: Initialize Git Repository

After resolving locks, run:

```powershell
# Option 1: Use the provided script
.\setup-git.ps1

# Option 2: Manual commands
git init
git remote add origin https://github.com/achalcipher/Nexus-Commerce.git
git add .
git commit -m "Initial commit: Nexus-Commerce unified structure"
git push -f origin master
```

### Step 3: Verify Deployment

1. Check GitHub repository: https://github.com/achalcipher/Nexus-Commerce.git
2. Verify all files are present
3. Check that `.git` folders are NOT in `frontend/` or `backend/` directories

## Completed Tasks ✅

- ✅ Cloned frontend repository into `frontend/` folder
- ✅ Cloned backend repository into `backend/` folder  
- ⚠️ `.git` folder deletion blocked by OneDrive (manual cleanup required)
- ✅ Created Kubernetes manifests in `k8s/` directory
- ✅ Created CI/CD workflow in `.github/workflows/deploy.yml`
- ✅ Created comprehensive README.md with Atomic Design documentation
- ⚠️ Git initialization blocked (run setup-git.ps1 after resolving locks)

## Next Steps

1. Resolve OneDrive file locks
2. Run `setup-git.ps1` or manual git commands
3. Configure GitHub Secrets for CI/CD:
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`
   - `KUBECONFIG`
4. Update Kubernetes secrets with your MongoDB connection string
5. Deploy to your Kubernetes cluster