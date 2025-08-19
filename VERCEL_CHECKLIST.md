# Vercel Deployment Checklist ✅

## Before Deployment

- [ ] Push all changes to GitHub
- [ ] Ensure you have a Vercel account
- [ ] Connect your GitHub repository to Vercel

## Environment Variables (Required)

Set these in Vercel Dashboard → Settings → Environment Variables:

- [ ] **APP_URL**: `https://your-project.vercel.app`
- [ ] **BASE_URL**: `https://your-project.vercel.app` (same as APP_URL)
- [ ] **CRON_SECRET**: `987668a3d487030a7a7099490d32f1ad0d6c53d6edb89227c253530c9a417f4a`

## Environment Variables (Optional)

- [ ] **NEXT_PUBLIC_DMCA_URL**: Your DMCA policy URL (if you have one)

## Vercel Settings

- [ ] Node.js Version: Set to 20.x or 22.x
- [ ] Build Command: `pnpm build`
- [ ] Install Command: `pnpm install`
- [ ] Output Directory: `.next` (auto-detected)

## After Deployment

- [ ] Test the main page loads correctly
- [ ] Test `/api/health` endpoint
- [ ] Test `/api/cron-status` endpoint
- [ ] Test `/api/revalidate` endpoint (manual revalidation)
- [ ] Check that cron jobs are working (daily at midnight)

## Troubleshooting

If deployment fails:

1. **Build Errors**: Check Vercel build logs
2. **Runtime Errors**: Check Function logs in Vercel
3. **Environment Variables**: Verify all required vars are set
4. **Node Version**: Ensure it's 20.x or 22.x

## Quick Commands

```bash
# Generate environment variables
pnpm setup-env

# Test build locally
pnpm build

# Test start locally
pnpm start
```

## Support

- Check `DEPLOYMENT.md` for detailed instructions
- Vercel Documentation: https://vercel.com/docs
- Next.js on Vercel: https://vercel.com/docs/functions/serverless-functions/runtimes/nodejs
