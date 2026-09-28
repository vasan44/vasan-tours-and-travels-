#!/bin/bash

# Fix axios import error in React Vite

echo "🔧 Fixing axios import error..."

# Navigate to frontend
cd "/home/athenas/Downloads/Tours and Travels/frontend"

# Clear Vite cache
echo "📦 Clearing Vite cache..."
rm -rf .vite node_modules/.vite

# Clear npm cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# Reinstall node_modules
echo "📥 Reinstalling dependencies..."
rm -rf node_modules package-lock.json
npm install

# Verify axios
echo "✅ Verifying axios installation..."
npm list axios

echo ""
echo "🎉 Fix complete! Now run: npm run dev"
