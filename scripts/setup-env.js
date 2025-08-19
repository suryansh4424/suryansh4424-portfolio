#!/usr/bin/env node

/**
 * Environment Variables Setup Script
 * This script helps you generate the required environment variables for Vercel deployment
 */

const crypto = require('crypto');

console.log('🚀 Vercel Deployment Environment Variables Setup\n');

// Generate a secure random string for CRON_SECRET
const generateSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

const cronSecret = generateSecret();

console.log('📋 Required Environment Variables:\n');

console.log('1. APP_URL');
console.log('   Description: Your Vercel deployment URL');
console.log('   Example: https://your-project.vercel.app');
console.log('   Value: [Set this to your actual Vercel URL]\n');

console.log('2. BASE_URL');
console.log('   Description: Same as APP_URL (used for API calls)');
console.log('   Example: https://your-project.vercel.app');
console.log('   Value: [Set this to your actual Vercel URL]\n');

console.log('3. CRON_SECRET');
console.log('   Description: Secret key for cron job authentication');
console.log('   Generated Value:', cronSecret);
console.log('   Use this exact value in Vercel\n');

console.log('4. NEXT_PUBLIC_DMCA_URL (Optional)');
console.log('   Description: URL to your DMCA policy page');
console.log('   Example: https://your-dmca-policy.com');
console.log('   Value: [Leave empty if you don\'t have one]\n');

console.log('📝 How to set these in Vercel:');
console.log('1. Go to your Vercel dashboard');
console.log('2. Select your project');
console.log('3. Go to Settings → Environment Variables');
console.log('4. Add each variable with the values above');
console.log('5. Set Environment to: Production, Preview, Development\n');

console.log('🔧 Additional Steps:');
console.log('- Make sure your Node.js version is set to 20.x or 22.x in Vercel');
console.log('- The build command should be: pnpm build');
console.log('- The install command should be: pnpm install\n');

console.log('✅ After setting these variables, redeploy your project!');
