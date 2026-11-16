# GitHub Repository Setup

This guide will help you push your Aether Smile Studio website to GitHub.

## Prerequisites

- Git installed on your system
- GitHub account created

## Option 1: Using GitHub Web Interface (Easiest)

### Step 1: Create Repository on GitHub
1. Go to [GitHub](https://github.com)
2. Click the "+" icon in top right → "New repository"
3. Fill in the details:
   - **Repository name**: `aether-smile-studio`
   - **Description**: Modern dental clinic website built with React, Vite, and Tailwind CSS
   - **Visibility**: Public (or Private if you prefer)
   - **Do NOT initialize with README** (we already have one)
4. Click "Create repository"

### Step 2: Push Your Code
GitHub will show you commands. Run these in your terminal:

```bash
# Set the remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/aether-smile-studio.git

# Push your code
git branch -M main
git push -u origin main
```

## Option 2: Using GitHub CLI (If Installed)

```bash
# Create and push in one command
gh repo create aether-smile-studio --public --source=. --description="Modern dental clinic website" --push
```

## Option 3: Using GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com)
2. Open GitHub Desktop
3. File → Add Local Repository
4. Select your project folder
5. Click "Publish repository"
6. Set name and description
7. Click "Publish"

## Verify Upload

After pushing, visit:
```
https://github.com/YOUR-USERNAME/aether-smile-studio
```

You should see all your files!

## Enable GitHub Pages (Optional)

To host your site for free on GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in sidebar
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)` or `/docs` if you move files there
5. Click "Save"

Note: You'll need to configure Vite for GitHub Pages (see DEPLOYMENT.md)

## Repository Settings Recommendations

### 1. Add Topics
Add these topics to help others find your project:
- `react`
- `vite`
- `tailwindcss`
- `dental-clinic`
- `healthcare`
- `frontend`
- `website`

### 2. Add Description
Your repository description:
```
Modern dental clinic website featuring responsive design, booking system, and treatment information. Built with React, Vite, and Tailwind CSS.
```

### 3. Add Website URL
Once deployed, add your live URL to the repository.

### 4. Branch Protection (Optional)
For collaborative work:
1. Settings → Branches
2. Add rule for `main`
3. Enable "Require pull request reviews before merging"

## Common Issues

### Authentication Failed
If you see "Authentication failed":

#### Using HTTPS:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Select scopes: `repo`, `workflow`
4. Copy the token
5. When pushing, use token as password

#### Or Switch to SSH:
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to GitHub
# Copy the public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub Settings → SSH and GPG keys → New SSH key

# Change remote to SSH
git remote set-url origin git@github.com:YOUR-USERNAME/aether-smile-studio.git
```

### Repository Already Exists
If you created it first:
```bash
git remote add origin https://github.com/YOUR-USERNAME/aether-smile-studio.git
git branch -M main
git push -u origin main
```

### Large Files Warning
If you see warnings about large files:
```bash
# Add to .gitignore
echo "node_modules/
dist/
.DS_Store" >> .gitignore

# Remove from git cache
git rm -r --cached node_modules
git commit -m "Remove node_modules from tracking"
git push
```

## Collaborative Development

### Clone Repository (for team members)
```bash
git clone https://github.com/YOUR-USERNAME/aether-smile-studio.git
cd aether-smile-studio
npm install
npm run dev
```

### Making Changes
```bash
# Create feature branch
git checkout -b feature-name

# Make changes, then:
git add .
git commit -m "Description of changes"
git push origin feature-name

# Create Pull Request on GitHub
```

## Keeping Your Repo Updated

### Pull Latest Changes
```bash
git pull origin main
npm install  # if dependencies changed
```

### Push New Changes
```bash
git add .
git commit -m "Your commit message"
git push
```

## Best Practices

1. **Commit Often**: Make small, focused commits
2. **Write Clear Messages**: Describe what and why, not how
3. **Use Branches**: For new features or experiments
4. **Review Before Pushing**: Check `git status` and `git diff`
5. **Keep .gitignore Updated**: Don't commit node_modules, .env files
6. **Tag Releases**: Use semantic versioning (v1.0.0, v1.1.0)

## Create a Release

1. Go to repository → Releases → Create new release
2. Create tag: `v1.0.0`
3. Release title: `Initial Release - Aether Smile Studio`
4. Describe changes
5. Attach built files (optional)
6. Publish release

## Repository Structure on GitHub

```
aether-smile-studio/
├── .github/
│   └── workflows/          # CI/CD workflows (optional)
├── public/                 # Static assets
├── src/                    # Source code
├── .gitignore
├── DEPLOYMENT.md          # Deployment instructions
├── GITHUB_SETUP.md        # This file
├── README.md              # Project overview
├── SECURITY.md            # Security documentation
├── package.json
└── ...
```

## Next Steps

After pushing to GitHub:
1. ✅ Set up GitHub Pages or deploy to Netlify/Vercel
2. ✅ Add project screenshot to README
3. ✅ Enable Dependabot for security updates
4. ✅ Add CONTRIBUTING.md if accepting contributions
5. ✅ Set up CI/CD pipeline (optional)
6. ✅ Add badges to README (build status, version, etc.)

## Support

- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Community](https://github.com/community)
