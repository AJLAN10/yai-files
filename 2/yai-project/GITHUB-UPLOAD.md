# GitHub Upload Instructions

The repository is ready. Follow these steps to push to GitHub:

## Option A — GitHub CLI (recommended)

```bash
# 1. Install GitHub CLI if needed
brew install gh   # macOS
# or: https://cli.github.com

# 2. Authenticate
gh auth login

# 3. Create repo and push (run from the yai-project folder)
gh repo create yemen-architecture-initiative \
  --public \
  --description "The global platform for Yemen's architectural heritage — 23 characters, Yemen Building Code, kingdom archives" \
  --push \
  --source .
```

## Option B — Personal Access Token via HTTPS

```bash
# 1. Create a token at: https://github.com/settings/tokens/new
#    Scopes needed: repo (full control)

# 2. Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/yemen-architecture-initiative.git

# 3. Push
git push -u origin main
# Enter your GitHub username and token when prompted
```

## Option C — SSH

```bash
# If you have SSH keys set up:
git remote add origin git@github.com:YOUR_USERNAME/yemen-architecture-initiative.git
git push -u origin main
```

## After pushing

1. Go to your repo → Settings → Pages → Deploy from branch: main
2. Add repo description: "Yemen Architecture Initiative — global heritage platform"
3. Add topics: `yemen`, `architecture`, `heritage`, `pwa`, `building-code`
4. Star the repository to promote it in search

## Repository URL format
https://github.com/YOUR_USERNAME/yemen-architecture-initiative
