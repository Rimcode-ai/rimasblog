# 🚀 Deployment Guide - Make Your Portfolio Live

Follow these steps to make your portfolio publicly accessible at **https://rimcode-ai.github.io/rimasblog**

## Step 1: Ensure Code is on GitHub

The code has been committed to the `claude/create-portfolio-website-s8ksm` branch. Make sure it's pushed to your actual GitHub repository:

```bash
git push origin claude/create-portfolio-website-s8ksm
```

✅ **Verify**: Go to https://github.com/Rimcode-ai/rimasblog and confirm you see:
- The `claude/create-portfolio-website-s8ksm` branch with all project files
- The `.github/workflows/deploy.yml` file in the repository

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository: **https://github.com/Rimcode-ai/rimasblog**
2. Click **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` (may appear after first action run)
   - **Folder**: Select `/ (root)`
5. Click **Save**

**Expected Result**: You'll see a green message saying your site is published

## Step 3: Automatic Deployment Trigger

The GitHub Actions workflow will automatically:
1. ✅ Run when you push to `claude/create-portfolio-website-s8ksm`
2. ✅ Build your Next.js project
3. ✅ Deploy to the `gh-pages` branch
4. ✅ GitHub Pages serves your site publicly

**To trigger deployment now**:
```bash
git push origin claude/create-portfolio-website-s8ksm
```

## Step 4: Verify Deployment

### Check GitHub Actions Status
1. Go to https://github.com/Rimcode-ai/rimasblog
2. Click the **Actions** tab
3. Look for "Deploy to GitHub Pages" workflow
4. When the workflow ✅ completes successfully, your site is live!

### View Your Live Website
Once the GitHub Actions workflow completes:
- **URL**: https://rimcode-ai.github.io/rimasblog
- You should see your portfolio homepage

**Wait 1-2 minutes** after successful workflow completion for GitHub Pages to serve the latest build.

## Step 5: Verify Everything Works

Check these on your live site:

- [ ] Home page loads with hero section
- [ ] Navigation links work (About, Experience, Education, Contact)
- [ ] Dark/Light mode toggle in top right works
- [ ] All pages are accessible
- [ ] Links to LinkedIn, GitHub, email work
- [ ] Responsive design works on mobile (open DevTools)

## ⚡ Future Updates

After initial setup, every time you:

1. **Update resume data** in `data/resume.ts`
2. **Modify a page** in `pages/`
3. **Change styling** in `styles/` or components

Just push your changes:
```bash
git add .
git commit -m "Update: Description of changes"
git push origin claude/create-portfolio-website-s8ksm
```

GitHub Actions will **automatically rebuild and redeploy** your site! 🎉

## Troubleshooting

### "gh-pages branch not found"
- First deployment creates the `gh-pages` branch automatically
- Wait for GitHub Actions to complete the first build
- Refresh the GitHub Pages settings page

### Site shows 404 or blank page
- Ensure GitHub Pages source is set to `gh-pages` branch, `/ (root)` folder
- Check the GitHub Actions workflow completed successfully
- Clear browser cache or use incognito mode

### Changes not reflecting on live site
- GitHub Actions workflow must complete successfully
- Check the workflow status in the **Actions** tab
- Wait 1-2 minutes for GitHub Pages to serve the new build

### Workflow failing
- Check the workflow logs in the **Actions** tab
- Common issues:
  - Missing Node.js cache
  - npm install failure
  - TypeScript compilation errors

## 📊 GitHub Actions Workflow Details

The workflow in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - claude/create-portfolio-website-s8ksm
```

**Triggers on**: Any push to `claude/create-portfolio-website-s8ksm`

**Steps**:
1. Checkout code from repository
2. Setup Node.js 18
3. Install npm dependencies
4. Build Next.js project (generates `/out` directory)
5. Deploy `/out` to `gh-pages` branch
6. GitHub Pages automatically serves the latest build

## 🔄 Workflow Diagram

```
You push code
    ↓
GitHub Actions triggers
    ↓
Install dependencies
    ↓
Build Next.js
    ↓
Deploy to gh-pages
    ↓
GitHub Pages serves site
    ↓
✅ Live at https://rimcode-ai.github.io/rimasblog
```

## 📝 Quick Reference

| Task | Command |
|------|---------|
| Check status locally | `npm run dev` |
| Build locally | `npm run build` |
| View build output | `ls -la out/` |
| Push and deploy | `git push origin claude/create-portfolio-website-s8ksm` |
| View live site | https://rimcode-ai.github.io/rimasblog |
| Check workflow status | GitHub → Actions tab |
| Configure GitHub Pages | GitHub → Settings → Pages |

## ✅ Deployment Checklist

- [ ] Code pushed to `claude/create-portfolio-website-s8ksm` branch
- [ ] GitHub Pages enabled in repository settings
- [ ] GitHub Pages source set to `gh-pages` branch
- [ ] GitHub Actions workflow runs successfully
- [ ] Website accessible at https://rimcode-ai.github.io/rimasblog
- [ ] All pages load correctly
- [ ] Dark/Light mode works
- [ ] Contact form works
- [ ] Links to social media work

## 🎉 You're Done!

Your portfolio is now live and will automatically update whenever you push changes to the `claude/create-portfolio-website-s8ksm` branch!

Share your portfolio:
- **https://rimcode-ai.github.io/rimasblog**

For any issues or questions, check the troubleshooting section above or review the GitHub Actions workflow logs.
