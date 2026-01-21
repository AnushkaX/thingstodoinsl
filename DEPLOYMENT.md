# GitHub Pages Deployment Guide

## Quick Fix for Blank Page & Image Issues

The blank page and missing images are usually caused by incorrect base path configuration. Follow these steps:

### Step 1: Determine Your GitHub Pages URL

**Option A: Project Page** (URL: `username.github.io/repository-name/`)
- If your repository name is `thingstodoinsl`
- Your URL will be: `https://anushkax.github.io/thingstodoinsl/`
- Keep `repositoryName = 'thingstodoinsl'` in `vite.config.ts`

**Option B: User/Organization Page** (URL: `username.github.io`)
- If your repository name is `anushkax.github.io` or you're using the main branch
- Your URL will be: `https://anushkax.github.io/`
- Change `repositoryName = ''` in `vite.config.ts`

### Step 2: Update vite.config.ts

Open `vite.config.ts` and update the `repositoryName` variable:

```typescript
// For project page (username.github.io/repo-name/)
const repositoryName = 'thingstodoinsl';

// OR for user page (username.github.io/)
const repositoryName = '';
```

### Step 3: Rebuild

```bash
npm run build
```

### Step 4: Deploy from Branch (Manual Deployment)

If you're deploying from a branch (not using GitHub Actions):

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Copy the `dist` folder contents to your deployment branch:**
   - If using `gh-pages` branch:
     ```bash
     git checkout gh-pages
     # Copy all files from dist/ to root
     # Or use: git subtree push --prefix dist origin gh-pages
     ```
   - If using a different branch, switch to that branch first

3. **Important files to include:**
   - All files from `dist/` folder
   - Make sure `404.html` is in the root (it should be copied from `public/404.html` during build)

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages  # or your deployment branch name
   ```

5. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Select the branch you're deploying from (e.g., `gh-pages`)
   - Select the `/root` folder
   - Save

### Step 5: Verify

- Check that `index.html` in the `dist` folder has the correct base path in asset URLs (e.g., `/thingstodoinsl/assets/...`)
- Visit your GitHub Pages URL
- Check browser console for any 404 errors
- Verify carousel images are loading correctly

## Troubleshooting

**If you see 404 errors for `/src/main.tsx`:**
1. Make sure you're deploying the `dist` folder contents, not the source files
2. Verify the base path in `vite.config.ts` matches your GitHub Pages URL
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

**If carousel images are not visible:**
1. Check that the `carousel` folder exists in your deployment directory
2. Verify image paths in the browser console (should include base path like `/thingstodoinsl/carousel/1.webp`)
3. Make sure `public/carousel/` images are copied to `dist/carousel/` during build
4. Rebuild and redeploy

**If 404.html redirect isn't working:**
1. Make sure `404.html` is in the root of your deployment directory
2. Check GitHub Pages settings to ensure custom 404 pages are enabled
