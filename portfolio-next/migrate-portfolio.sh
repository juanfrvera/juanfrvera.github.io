#!/bin/bash

# Migration script to replace Nuxt.js portfolio with Next.js portfolio
# This script will backup the old repository and replace it with the new one

echo "🚀 Starting portfolio migration from Nuxt.js to Next.js..."

# Set directories
OLD_REPO="/home/juan/dev/me/juanfrvera.github.io"
NEW_PORTFOLIO="/home/juan/dev/me/portfolio"
BACKUP_DIR="/home/juan/dev/me/portfolio-backup-$(date +%Y%m%d_%H%M%S)"

echo "📂 Creating backup of existing repository..."
cp -r "$OLD_REPO" "$BACKUP_DIR"
echo "✅ Backup created at: $BACKUP_DIR"

echo "🔄 Preserving Git history and important files..."
# Save the .git directory and important files
cp -r "$OLD_REPO/.git" "$NEW_PORTFOLIO/.git"
cp "$OLD_REPO/.gitignore" "$NEW_PORTFOLIO/.gitignore" 2>/dev/null || echo "No .gitignore found in old repo"

echo "🗑️  Cleaning old repository content..."
# Remove old content but keep .git
cd "$OLD_REPO"
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} \;

echo "📋 Copying new Next.js portfolio..."
# Copy everything from new portfolio except .git
cd "$NEW_PORTFOLIO"
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec cp -r {} "$OLD_REPO/" \;

echo "🏗️  Building the new portfolio..."
cd "$OLD_REPO"
npm install
npm run build

echo "✅ Migration completed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Review changes: cd $OLD_REPO && git status"
echo "2. Test the site: npm run dev"
echo "3. Commit changes: git add . && git commit -m 'Migrate from Nuxt.js to Next.js'"
echo "4. Push to GitHub: git push origin master"
echo ""
echo "🔗 Your backup is available at: $BACKUP_DIR"
