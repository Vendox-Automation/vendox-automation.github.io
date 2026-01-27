# GitHub Pages — Full Publishing & Debugging Guide

> **Expected behavior**
> - First deployment: **30–120 seconds**
> - Subsequent updates: **10–60 seconds**
> - If changes do **not appear after hours**, something is misconfigured

---

## 1. Identify the Symptom First
Different symptoms imply different root causes.

- Old content still visible
- 404 page
- Blank page
- README showing instead of site
- HTML updates but CSS/JS do not
- Custom domain shows old site

Keep this in mind while debugging.

---

## 2. Absolute Basics (Most Common Mistakes)

### 2.1 `index.html` naming
Must be **exactly**:
```
index.html
```
Not:
```
Index.html
index.htm
home.html
```
GitHub Pages is **case-sensitive**.

---

### 2.2 File location
Depends on your Pages source setting.

**Root deployment**:
```
repo/
├─ index.html
├─ style.css
```

**`/docs` deployment**:
```
repo/
├─ docs/
│  ├─ index.html
```

Check:
```
Settings → Pages → Source
```

---

### 2.3 Correct branch
You must push to the same branch Pages uses.

Check locally:
```
git branch
```

Check on GitHub:
```
Settings → Pages → Branch
```

Common mistake:
- Code pushed to `dev`
- Pages uses `main`

---

## 3. GitHub Pages Configuration (Step-by-Step)

This section verifies that GitHub Pages itself is configured correctly.

### 3.1 Open Pages settings
Navigate to:
```
Repository → Settings → Pages
```

You should see the **GitHub Pages** configuration panel.

---

### 3.2 Select the correct source
Under **Source**:
- **Deploy from a branch** (most common)

Choose:
- **Branch**: `main` (or the branch you deploy from)
- **Folder**:
  - `/ (root)` → for plain HTML or build output in root
  - `/docs` → if your site lives in a `docs/` folder
  - `/dist`, `/build`, `/out` → if using a framework

Click **Save**.

> Saving this triggers a deployment.

---

### 3.3 Verify deployment environment
After saving, GitHub will show:
```
Your site is being built
```

And then:
```
Your site is live at https://username.github.io/repo-name/
```

If this message does not appear, Pages is not deploying.

---

### 3.4 Confirm Pages build workflow
Go to:
```
Actions → Pages build and deployment
```

You should see a workflow triggered by:
- `pages build and deployment`

Statuses:
- 🟡 In progress
- ✅ Completed successfully
- ❌ Failed (click to inspect logs)

---

### 3.5 Pages permissions check
Navigate to:
```
Settings → Actions → General
```

Ensure:
- **Workflow permissions** → Read and write permissions
- **Allow GitHub Actions to deploy GitHub Pages** → Enabled

Incorrect permissions can silently block deployment.

---

### 3.6 Pages visibility & access
Ensure the repository is:
- **Public** (recommended)
- Or **Private with Pages enabled** (requires proper permissions)

If the repo visibility changed recently, re-save Pages settings.

---

## 4. Deployment Status (Critical)


### 3.2 Read failure logs
Typical failure causes:
- Missing `index.html`
- Wrong build folder
- Jekyll processing errors
- Permission issues

---

## 4. Browser & CDN Caching

### 4.1 Hard refresh
- Windows/Linux: `Ctrl + Shift + R`
- macOS: `Cmd + Shift + R`

---

### 4.2 Disable cache (DevTools)
1. Open DevTools
2. Network tab
3. Check **Disable cache**
4. Reload

---

### 4.3 Cache-busting assets
GitHub Pages caches CSS/JS aggressively.

❌ Bad:
```html
<link rel="stylesheet" href="style.css">
```

✅ Good:
```html
<link rel="stylesheet" href="style.css?v=2">
```

Or rename:
```
style.2026.css
```

---

## 5. Custom Domain Issues (Very Common)

### 5.1 Verify domain settings
```
Settings → Pages → Custom domain
```

Check for a `CNAME` file in repo root.

---

### 5.2 DNS propagation
DNS can cache **for hours**.

Even if GitHub updated instantly, the following may still serve old content:
- ISP cache
- Router cache
- Browser cache
- DNS provider

---

### 5.3 Cloudflare users
If using Cloudflare:
- Purge cache (Everything)
- Disable auto-minify
- Disable caching temporarily

Cloudflare can override GitHub Pages content.

---

## 6. Framework Scenarios (React / Vite / Next / Vue)

GitHub Pages only serves **static output**, not source code.

| Framework | Deploy Folder |
|--------|---------------|
| React (CRA) | `build/` |
| Vite | `dist/` |
| Next.js (static export) | `out/` |

---

### 6.1 Common mistake
Forgetting to rebuild before pushing:

❌ Only doing:
```bash
git push
```

✅ Required:
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

Ensure Pages source points to the build folder.

---

## 7. Relative Path Issues

GitHub Pages is usually **not** served from `/`.

If site URL is:
```
https://username.github.io/my-site/
```

❌ Broken:
```html
<link href="/style.css">
```

✅ Correct:
```html
<link href="./style.css">
```

This often causes:
- HTML loads
- CSS/JS never updates

---

## 8. Jekyll Interference

GitHub Pages auto-runs Jekyll unless disabled.

### Fix
Create an empty file:
```
.nojekyll
```

Push it.

This fixes:
- Missing assets
- `_` folders ignored
- Pages not updating correctly

---

## 9. Inspect the Deployed File Directly

Open:
```
https://username.github.io/repo-name/index.html
```

Then:
- Right-click → View Source

**If source is old** → GitHub did not deploy
**If source is new** → Cache/DNS issue

---

## 10. Force a Redeploy (Last Resort)

### Option A — Empty commit
```bash
git commit --allow-empty -m "Force redeploy"
git push
```

### Option B — Toggle Pages source
1. Settings → Pages
2. Change branch/folder → Save
3. Change back → Save

---

## 11. Rare Edge Cases

- Repo visibility changed (private → public)
- Multiple repos using same custom domain
- GitHub Pages incident

---

## 12. Debug Decision Tree

1. Actions shows successful deploy?
   - ❌ No → Fix build
2. View Source shows new HTML?
   - ❌ No → Wrong branch/folder
3. HTML updated but CSS/JS didn’t?
   - Cache / filenames
4. Using custom domain?
   - DNS / Cloudflare
5. Using framework?
   - Build folder misconfigured

---

## Final Checklist (Copy/Paste)
Answer these to pinpoint the issue fast:

1. Static HTML or framework (which?)
2. Custom domain? (yes/no)
3. Pages source (branch + folder)
4. Actions tab status (success/fail)
5. What failed to update (HTML / CSS / JS)

Once these are known, the issue is usually obvious.

