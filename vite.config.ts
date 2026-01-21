import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages deployment:
// 
// IMPORTANT: Update the repositoryName below to match your GitHub Pages URL:
// 
// Option A - Project Page (username.github.io/repo-name/):
//   If your URL is: https://anushkax.github.io/thingstodoinsl/
//   Set: const repositoryName = 'thingstodoinsl';
//
// Option B - User/Organization Page (username.github.io):
//   If your URL is: https://anushkax.github.io/
//   Set: const repositoryName = '';
//
// After changing, run: npm run build
// Then deploy the contents of the 'dist' folder to GitHub Pages

const repositoryName = 'thingstodoinsl'; // ⚠️ UPDATE THIS to match your GitHub Pages URL

export default defineConfig({
  plugins: [react()],
  base: repositoryName ? `/${repositoryName}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
