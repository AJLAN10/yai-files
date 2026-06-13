#!/bin/bash
# Yemen Architecture Initiative — One-command GitHub push
# Usage: bash push-to-github.sh YOUR_GITHUB_TOKEN
# Get token at: github.com/settings/tokens/new (scope: repo)

TOKEN=$1
if [ -z "$TOKEN" ]; then
  echo "Usage: bash push-to-github.sh YOUR_GITHUB_TOKEN"
  exit 1
fi

cd yai-project
git remote add origin https://AJLAN10:${TOKEN}@github.com/AJLAN10/YAI.git 2>/dev/null || \
git remote set-url origin https://AJLAN10:${TOKEN}@github.com/AJLAN10/YAI.git
git push -u origin main
echo "✅ Done — https://github.com/AJLAN10/YAI"
