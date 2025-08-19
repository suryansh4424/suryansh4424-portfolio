# Environment Variables Setup Guide

## Quick Setup Steps

### 1. Go to Vercel Dashboard

- Visit [vercel.com/dashboard](https://vercel.com/dashboard)
- Select your project

### 2. Navigate to Environment Variables

- Click **Settings** tab
- Click **Environment Variables** in the left sidebar

### 3. Add Required Variables

#### Variable 1: APP_URL

- **Name**: `APP_URL`
- **Value**: `https://your-project.vercel.app` (replace with your actual URL)
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

#### Variable 2: BASE_URL

- **Name**: `BASE_URL`
- **Value**: `https://your-project.vercel.app` (same as APP_URL)
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

#### Variable 3: CRON_SECRET

- **Name**: `CRON_SECRET`
- **Value**: `987668a3d487030a7a7099490d32f1ad0d6c53d6edb89227c253530c9a417f4a`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

### 4. Save and Redeploy

- Click **Save** after adding each variable
- Go to **Deployments** tab
- Click **Redeploy** on your latest deployment

## Common Issues

### ❌ "Secret does not exist"

**Solution**: Don't use `@secret_name` format. Set variables directly in the dashboard.

### ❌ "Environment variable not found"

**Solution**: Make sure you've selected all three environments (Production, Preview, Development).

### ❌ API routes returning errors

**Solution**: Verify `BASE_URL` and `CRON_SECRET` are set correctly.

## Verification

After setting up, test these endpoints:

- `/api/health` - Should return status "healthy"
- `/api/cron-status` - Should show cron job status
- `/api/revalidate` - Should work for manual revalidation

## Need Help?

- Check the main `DEPLOYMENT.md` file
- Review `VERCEL_CHECKLIST.md` for complete setup
- Run `npm run setup-env` to generate new values if needed
