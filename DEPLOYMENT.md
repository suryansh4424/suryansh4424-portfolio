# Vercel Deployment Guide

## Prerequisites

- Vercel account
- GitHub repository connected to Vercel
- Node.js 20+ and pnpm installed locally

## Environment Variables Setup

You need to configure these environment variables in your Vercel project:

### Required Environment Variables

1. **APP_URL**: Your Vercel deployment URL
   - Example: `https://your-project.vercel.app`
   - Or your custom domain if you have one

2. **BASE_URL**: Same as APP_URL
   - Example: `https://your-project.vercel.app`

3. **CRON_SECRET**: A secret key for the cron job
   - Generate a random string (32+ characters)
   - Example: `your-super-secret-key-here-123456789`

### Optional Environment Variables

4. **NEXT_PUBLIC_DMCA_URL**: If you have a DMCA policy page
   - Example: `https://your-dmca-policy.com`

## How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - **Name**: `APP_URL`
   - **Value**: `https://your-project.vercel.app`
   - **Environment**: Production, Preview, Development
5. Repeat for all variables

## Deployment Steps

1. **Connect Repository**:
   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Configure Build Settings**:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`
   - Output Directory: `.next`

3. **Set Environment Variables** (as described above)

4. **Deploy**:
   - Vercel will automatically detect the Next.js project
   - The build should complete successfully

## Common Issues and Solutions

### Build Failures

1. **Node Version**: Ensure you're using Node.js 20+ in Vercel
   - Go to Project Settings → General → Node.js Version
   - Set to 20.x or 22.x

2. **Package Manager**: The project uses pnpm
   - Vercel should auto-detect this from `package-lock.json`

3. **Environment Variables**: Make sure all required env vars are set

### Runtime Errors

1. **API Routes**: Check that `BASE_URL` and `CRON_SECRET` are set
2. **Domain Issues**: Update `APP_URL` to match your actual domain
3. **Cron Jobs**: Verify `CRON_SECRET` is set for the revalidation cron

### Domain Configuration

If you're using a custom domain:

1. Update `APP_URL` and `BASE_URL` to your custom domain
2. Configure the domain in Vercel dashboard
3. Update DNS settings as instructed by Vercel

## Testing Deployment

1. **Health Check**: Visit `/api/health` to verify the API is working
2. **Cron Status**: Visit `/api/cron-status` to check cron job status
3. **Manual Revalidation**: Visit `/api/revalidate` to test revalidation

## Troubleshooting

If you encounter specific errors, check:

1. Vercel build logs for build-time errors
2. Function logs for runtime errors
3. Environment variable configuration
4. Node.js version compatibility

## Support

For Vercel-specific issues, refer to:

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/functions/serverless-functions/runtimes/nodejs)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
