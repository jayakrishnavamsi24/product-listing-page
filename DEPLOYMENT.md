# Vercel Deployment Guide

## Prerequisites

- Vercel account (free tier available)
- GitHub repository with your code
- Firebase project configured

## Deployment Steps

### 1. Install Vercel CLI (Optional)

```bash
npm i -g vercel
```

### 2. Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   - Create a new repository on GitHub
   - Push your local code to the repository

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables:**
   Add these environment variables in Vercel dashboard:

   ```
   VITE_FIREBASE_API_KEY=AIzaSyAnN9pZsFj3oM54I2PhgmNHvenD2e6ENWU
   VITE_FIREBASE_AUTH_DOMAIN=product-listing-page-56728.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=product-listing-page-56728
   VITE_FIREBASE_STORAGE_BUCKET=product-listing-page-56728.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=190996308857
   VITE_FIREBASE_APP_ID=1:190996308857:web:6da2c0e58fb6c8f539c5a8
   VITE_FIREBASE_MEASUREMENT_ID=G-EP2JE0EETG
   ```

4. **Deploy:**
   - Vercel will automatically detect it's a Vite project
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Click "Deploy"

### 3. Deploy via CLI (Alternative)

1. **Login to Vercel:**

   ```bash
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## Important Notes

1. **Firebase Configuration:**
   - Make sure your Firebase project has the correct authorized domains
   - Add your Vercel domain to Firebase Console > Authentication > Settings > Authorized domains

2. **Environment Variables:**
   - All environment variables starting with `VITE_` are included in the build
   - Never commit sensitive keys to your repository

3. **Custom Domain (Optional):**
   - You can add a custom domain in Vercel dashboard
   - Update Firebase authorized domains accordingly

## Post-Deployment Checklist

- [ ] Test authentication (Google Sign-in)
- [ ] Verify all environment variables are loaded
- [ ] Check all pages and features work correctly
- [ ] Test responsive design on different devices
- [ ] Verify Firebase security rules

## Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check TypeScript errors: `npm run type-check`
   - Verify all dependencies are installed

2. **Authentication Not Working:**
   - Verify environment variables in Vercel dashboard
   - Check Firebase authorized domains
   - Ensure OAuth consent screen is configured

3. **Images Not Loading:**
   - All images should be in the `public` folder
   - Use absolute paths starting with `/`

4. **Routing Issues:**
   - The `vercel.json` file handles SPA routing
   - All routes redirect to `index.html`

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Firebase Hosting Setup](https://firebase.google.com/docs/hosting)
