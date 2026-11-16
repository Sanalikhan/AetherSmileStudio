# Deployment Guide

This guide will help you deploy the Aether Smile Studio website to various hosting platforms.

## Quick Deploy Options

### 1. Netlify (Recommended)

#### Via Netlify CLI:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

#### Via Git Integration:
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### 2. Vercel

#### Via Vercel CLI:
```bash
npm install -g vercel
vercel
```

#### Via Git Integration:
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/aether-smile-studio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/aether-smile-studio/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project
4. Connect your repository
5. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output: `dist`
6. Deploy

### 5. AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Create an S3 bucket:
```bash
aws s3 mb s3://aether-smile-studio
```

3. Enable static website hosting:
```bash
aws s3 website s3://aether-smile-studio --index-document index.html
```

4. Upload files:
```bash
aws s3 sync dist/ s3://aether-smile-studio --acl public-read
```

5. Set up CloudFront for HTTPS

### 6. DigitalOcean App Platform

1. Push to GitHub
2. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
3. Create new app
4. Connect repository
5. Configure:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy

## Build Configuration

### Environment Variables (if needed)
Create a `.env.production` file:
```
VITE_API_URL=your_api_url_here
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Build Optimization

The production build is already optimized:
- Code splitting
- Minification
- Tree shaking
- CSS extraction
- Asset optimization

Check build size:
```bash
npm run build
```

## Custom Domain Setup

### Netlify:
1. Go to Domain settings
2. Add custom domain
3. Configure DNS:
   - Type: CNAME
   - Name: www
   - Value: yoursite.netlify.app

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS as instructed

### GitHub Pages:
1. Add `CNAME` file to `public/` directory
2. Add your domain name to the file
3. Configure DNS:
   - Type: CNAME
   - Value: yourusername.github.io

## SSL/HTTPS

All recommended platforms provide free SSL certificates:
- Netlify: Automatic Let's Encrypt SSL
- Vercel: Automatic SSL
- Cloudflare Pages: Automatic SSL
- GitHub Pages: Automatic SSL (for custom domains)

## Performance Optimization

1. **Enable Compression**
   - Most platforms enable gzip/brotli automatically

2. **CDN**
   - All recommended platforms use CDN by default

3. **Caching**
   - Static assets are cached automatically
   - Set cache headers via platform settings

4. **Image Optimization**
   - Images from Unsplash are already optimized
   - For custom images, use WebP format

## Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://pingdom.com)
- [StatusCake](https://statuscake.com)

### Analytics (Optional)
```bash
npm install @vercel/analytics
```

Add to `main.jsx`:
```javascript
import { inject } from '@vercel/analytics';
inject();
```

## Rollback

### Netlify/Vercel:
- Use platform dashboard to rollback to previous deployment

### GitHub Pages:
```bash
git revert HEAD
npm run deploy
```

## CI/CD Pipeline

### GitHub Actions Example:
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Troubleshooting

### Build Fails:
- Check Node.js version (16+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for dependency conflicts

### Routing Issues (404 on refresh):
Add to `public/_redirects` (Netlify):
```
/*    /index.html   200
```

Add to `vercel.json` (Vercel):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Images Not Loading:
- Verify image URLs are absolute
- Check CORS settings
- Use HTTPS for all external resources

## Post-Deployment Checklist

- [ ] Test all pages
- [ ] Test booking form
- [ ] Test contact form
- [ ] Test responsive design
- [ ] Check browser console for errors
- [ ] Verify SSL certificate
- [ ] Test on multiple browsers
- [ ] Check page load speed
- [ ] Verify meta tags for SEO
- [ ] Test all navigation links

## Support

For deployment issues, check:
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
