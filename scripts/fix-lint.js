#!/usr/bin/env node

/**
 * ESLint Auto-Fix Script
 * This script helps fix common ESLint issues that might cause deployment failures
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing ESLint issues...\n');

try {
  // Run ESLint with auto-fix
  console.log('Running ESLint auto-fix...');
  execSync('npx eslint --fix "src/**/*.{ts,tsx}"', { stdio: 'inherit' });
  
  console.log('\n✅ ESLint auto-fix completed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Review the changes made by ESLint');
  console.log('2. Commit the fixed files');
  console.log('3. Push to GitHub');
  console.log('4. Redeploy on Vercel');
  
} catch (error) {
  console.error('\n❌ ESLint auto-fix failed:', error.message);
  console.log('\n🔍 Manual fixes needed:');
  console.log('1. Check for unused imports and variables');
  console.log('2. Remove or use the unused variables');
  console.log('3. Run "npm run lint" to see specific errors');
  console.log('4. Fix the errors manually');
}
