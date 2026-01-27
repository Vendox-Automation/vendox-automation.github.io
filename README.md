# Vendox Automation Portfolio

A modern, high-performance portfolio website showcasing automation projects with visual impact, multilingual support, and responsive design. Built with **Vanilla JavaScript**, **Webpack**, and **SASS** for optimal performance and maintainability.

**🌐 Live Site**: [https://vendox-automation.github.io/](https://vendox-automation.github.io/)

> **Credits**: This portfolio is based on the excellent work by [EliasDevis](https://github.com/EliasDevis/EliasDevis.github.io). The original template provided a solid foundation which has been customized and extended for automation project showcases.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Maintenance Guide](#maintenance-guide)
  - [Adding New Projects](#1-adding-a-new-project)
  - [Adjusting Layout](#2-adjusting-card-sizing--layout)
  - [Multilingual Support](#3-multilingual-support)
  - [Managing Tech Icons](#4-tech-icons)
  - [Styling Guidelines](#5-styling-guidelines)
- [Deployment](#deployment)
- [Performance Optimization](#performance-optimization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This portfolio website serves as a comprehensive showcase for automation engineering projects, featuring:

- **Interactive Project Cards**: Visual display of automation projects with tech stack indicators
- **Multilingual Support**: Currently supports English with infrastructure for additional languages
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Fast Loading**: Webpack-optimized bundles with code splitting
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Maintenance**: Modular architecture for simple content updates

---

## ✨ Features

### Core Functionality
- ✅ **Dynamic Project Loading**: Projects loaded from centralized configuration
- ✅ **Technology Tags**: Visual tech stack representation with custom and DevIcon support
- ✅ **Status Labels**: Project status indicators (Automated, In Progress, etc.)
- ✅ **GitHub Integration**: Direct links to project repositories
- ✅ **Search & Filter**: Find projects by name, tech, or status
- ✅ **Responsive Grid**: Adapts to different screen sizes automatically
- ✅ **SEO Optimized**: Meta tags and semantic HTML for better discoverability

### Developer Experience
- 🛠️ **Hot Reload**: Live development server with auto-refresh
- 📦 **Webpack Build**: Optimized production bundles
- 🎨 **SASS Preprocessing**: Modular, maintainable stylesheets
- 🔧 **EJS Templates**: Dynamic HTML generation
- 📱 **Mobile-First**: Responsive design approach

---

## 🔧 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Core** | Vanilla JavaScript (ES6+), HTML5, SASS/SCSS |
| **Build Tools** | Webpack 5, Babel, PostCSS |
| **Templating** | EJS (Embedded JavaScript) |
| **Icons** | Devicon, Icons8, Skill Icons |
| **Deployment** | GitHub Pages, GitHub Actions |
| **Development** | Webpack Dev Server, ESLint (optional) |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vendox-automation/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run serve
   ```

4. **Open in browser**:
   Navigate to [http://localhost:9000](http://localhost:9000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run serve` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle |
| `npm run clean` | Remove dist folder |
| `npm run watch` | Build and watch for changes |

---

## 📁 Project Structure

```
vendox-automation-portfolio/
├── .github/
│   └── workflows/
│       └── main.yml              # GitHub Actions deployment config
├── src/
│   ├── app/                      # Core application logic
│   │   ├── components/           # Reusable components
│   │   │   ├── Header.js         # Navigation header
│   │   │   ├── Footer.js         # Page footer
│   │   │   ├── Project.js        # Project card component
│   │   │   └── ...
│   │   ├── consts/               # Configuration files
│   │   │   ├── projects.js       # ⚡ Project data definitions
│   │   │   ├── techs.js          # Technology stack definitions
│   │   │   └── routes.js         # Site routing configuration
│   │   ├── helpers/              # Utility functions
│   │   │   ├── localeHandler.js  # i18n translation loader
│   │   │   ├── searchHandler.js  # Search functionality
│   │   │   └── ...
│   │   └── views/                # Page layouts
│   │       ├── Home.js           # Homepage view
│   │       ├── Projects.js       # Projects listing view
│   │       ├── About.js          # About page view
│   │       └── ...
│   ├── assets/                   # Static assets
│   │   ├── locales/              # Translation files
│   │   │   └── en.json           # ⚡ English translations
│   │   ├── styles/               # SASS stylesheets
│   │   │   ├── components/       # Component-specific styles
│   │   │   ├── pages/            # Page-specific styles
│   │   │   ├── base/             # Global styles, variables
│   │   │   └── styles.sass       # Main stylesheet entry
│   │   └── images/               # Image assets
│   │       ├── logos/            # Technology logos
│   │       ├── screenshots/      # Project screenshots
│   │       └── ...
│   ├── templates/                # HTML templates
│   │   └── index.ejs             # Main HTML template
│   └── index.js                  # Application entry point
├── dist/                         # Production build output (gitignored)
├── webpack.config.js             # Webpack configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

### Key Files Explanation

| File/Folder | Purpose |
|-------------|---------|
| `src/app/consts/projects.js` | **Primary data source** for all projects - add new projects here |
| `src/assets/locales/en.json` | **Translation strings** - all text content lives here |
| `src/app/consts/techs.js` | Technology definitions and categorizations |
| `src/app/components/Project.js` | Project card rendering logic and tech icon mapping |
| `src/assets/styles/components/project.sass` | Project card styling and grid layout |
| `webpack.config.js` | Build configuration for development and production |

---

## 🛠️ Maintenance Guide

### 1️⃣ Adding a New Project

Adding a project is a **3-step process**. All new projects require updates in these locations:

#### **Step A: Define Project Data** 
📝 **File**: `src/app/consts/projects.js`

Add a new object to the `projects` array:

```javascript
export const projects = [
  // ... existing projects
  {
    id: "facebook-scraper",           // Unique identifier (use kebab-case)
    status: "AUTOMATED",              // Status: AUTOMATED, IN_PROGRESS, PLANNED
    techs: ["python", "selenium"],    // Tech keys (must exist in techs.js)
    links: {                          // Optional: external links
      github: "https://github.com/user/repo",
      live: "https://example.com"     // Optional live demo
    },
  },
];
```

**Status Options**:
- `AUTOMATED` - Production-ready, actively used
- `IN_PROGRESS` - Currently under development
- `PLANNED` - Future project
- `MAINTENANCE` - Completed but receiving updates

#### **Step B: Add Translations** 
🌐 **File**: `src/assets/locales/en.json`

Add project details under the `projects` section:

```json
{
  "projects": {
    "facebook-scraper": {
      "name": "Facebook Comment Scraper",
      "description": "Automated web scraper that extracts Facebook post links, owners, captions, and comments from group posts, then stores data in Google Sheets. Saves 79-91% of time vs manual processing.",
      "features": [
        "Keyword-based search automation",
        "Complete comment extraction with auto-expand",
        "Google Sheets integration",
        "85-91% time savings for large datasets"
      ],
      "metrics": {
        "efficiency": "79-91% time saved",
        "speed": "4.7-10× faster than manual",
        "roi": "60-144% annual ROI"
      }
    }
  }
}
```

**Translation Schema**:
- `name`: Project title (50 chars max recommended)
- `description`: Brief overview (150-200 chars recommended)
- `features`: Array of key features (optional, max 5 recommended)
- `metrics`: Performance data (optional)

#### **Step C: Add Technology (If New)** 
⚙️ **File**: `src/app/consts/techs.js`

If using a technology not yet in the list, add it:

```javascript
export const techs = {
  "selenium": {
    name: "Selenium",
    category: "automation",      // automation, language, framework, database, cloud
    color: "#43B02A"             // Brand color for tags
  },
  // ... more techs
};
```

#### **Step D: Add Custom Icon (If Needed)** 
🎨 **File**: `src/app/components/Project.js`

For technologies not in Devicon, add to `customIcons`:

```javascript
const customIcons = {
  selenium: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  excel: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  // ... more custom icons
};
```

**Icon Sources**:
- **Devicon**: [devicon.dev](https://devicon.dev) - 150+ developer icons
- **Icons8**: [icons8.com](https://icons8.com) - General purpose icons
- **Skill Icons**: [skillicons.dev](https://skillicons.dev) - Developer skill badges

---

### 2️⃣ Adjusting Card Sizing & Layout

📐 **File**: `src/assets/styles/components/project.sass`

#### Grid Layout Configuration

```sass
.project-list
  display: grid
  grid-template-columns: repeat(3, 1fr)  // 3 columns on desktop
  gap: 24px                              // Space between cards
  
  @media (max-width: 1200px)
    grid-template-columns: repeat(2, 1fr) // 2 columns on tablet
    
  @media (max-width: 768px)
    grid-template-columns: 1fr            // 1 column on mobile
```

#### Card Dimensions

```sass
.project
  height: 100%                    // Fill available grid space
  min-height: 300px               // Minimum card height
  padding: 24px                   // Internal spacing
  border-radius: 12px             // Rounded corners
  
.project__tech-logo
  width: 32px                     // Technology icon size
  height: 32px
  
.project__title
  font-size: 1.5rem               // Title size
  margin-bottom: 12px
```

#### Common Adjustments

| Goal | Change |
|------|--------|
| More cards per row | Increase `repeat(3, 1fr)` to `repeat(4, 1fr)` |
| Larger cards | Increase `min-height` value |
| More spacing | Increase `gap` value |
| Bigger tech icons | Increase `.project__tech-logo` dimensions |

---

### 3️⃣ Multilingual Support

🌐 **Current**: English only  
**Files**: `src/assets/locales/en.json`

#### Adding a New Language

1. **Create locale file**: 
   ```bash
   cp src/assets/locales/en.json src/assets/locales/ms.json
   ```

2. **Translate all strings** in the new file

3. **Update locale handler**:
   ```javascript
   // src/app/helpers/localeHandler.js
   const supportedLocales = ['en', 'ms']; // Add new locale
   ```

4. **Add language selector** in the UI (Header component)

#### Translation Keys Structure

```json
{
  "nav": {
    "home": "Home",
    "projects": "Projects",
    "about": "About"
  },
  "projects": {
    "project-id": {
      "name": "Project Name",
      "description": "Project description"
    }
  },
  "common": {
    "viewMore": "View More",
    "learnMore": "Learn More"
  }
}
```

**Usage in Code**:
```javascript
import { t } from '../helpers/localeHandler';

const title = t.projects['facebook-scraper'].name;
const description = t.projects['facebook-scraper'].description;
```

---

### 4️⃣ Tech Icons

🎨 **File**: `src/app/components/Project.js`

The project uses a **hybrid approach** for technology icons:

#### DevIcon (Primary Source)

Auto-fetched from jsDelivr CDN:
```javascript
const techIconMap = {
  python: "python/python-original",
  javascript: "javascript/javascript-original",
  // ... mapped to devicon paths
};
```

#### Custom Icons (Fallback)

For technologies not well-supported by Devicon:
```javascript
const customIcons = {
  selenium: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  excel: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  googlesheets: "https://skillicons.dev/icons?i=googlesheets",
  telegram: "https://img.icons8.com/color/48/telegram-app--v1.png",
};
```

#### Icon Priority Order

1. Check `customIcons` object
2. Fall back to `techIconMap` (Devicon)
3. Display placeholder if neither exists

#### Adding a New Tech Icon

**Option A: Use Devicon** (Preferred)
1. Find icon at [devicon.dev](https://devicon.dev)
2. Add to `techIconMap`:
   ```javascript
   techIconMap.newtechnology = "newtechnology/newtechnology-original";
   ```

**Option B: Use Custom Icon**
1. Find icon source (Icons8, Skill Icons, etc.)
2. Add to `customIcons`:
   ```javascript
   customIcons.newtechnology = "https://cdn.example.com/icon.svg";
   ```

---

### 5️⃣ Styling Guidelines

🎨 **SASS Organization**

Follow this structure for maintainability:

```
src/assets/styles/
├── base/
│   ├── _reset.sass         # CSS reset/normalize
│   ├── _variables.sass     # Colors, fonts, breakpoints
│   └── _typography.sass    # Font definitions
├── components/
│   ├── _header.sass        # Header component styles
│   ├── _footer.sass        # Footer component styles
│   ├── _project.sass       # Project card styles
│   └── _button.sass        # Button styles
├── pages/
│   ├── _home.sass          # Homepage-specific styles
│   └── _projects.sass      # Projects page styles
└── styles.sass             # Main entry (imports all)
```

#### Variable Naming Convention

```sass
// _variables.sass

// Colors
$color-primary: #2563eb
$color-secondary: #7c3aed
$color-text: #1f2937
$color-background: #ffffff

// Breakpoints
$breakpoint-mobile: 768px
$breakpoint-tablet: 1024px
$breakpoint-desktop: 1280px

// Spacing
$spacing-xs: 4px
$spacing-sm: 8px
$spacing-md: 16px
$spacing-lg: 24px
$spacing-xl: 32px
```

#### Component Style Template

```sass
// components/_example.sass

.example
  // Layout
  display: flex
  flex-direction: column
  
  // Sizing
  width: 100%
  padding: $spacing-md
  
  // Visual
  background-color: $color-background
  border-radius: 8px
  
  // Typography
  font-size: 1rem
  color: $color-text
  
  // States
  &:hover
    background-color: darken($color-background, 5%)
  
  // Responsive
  @media (max-width: $breakpoint-mobile)
    padding: $spacing-sm
```

---

## 🚢 Deployment

The project is configured for **automatic deployment to GitHub Pages** via GitHub Actions.

### Deployment Workflow

1. **Trigger**: Push to `main` branch
2. **Action**: GitHub Action runs (`.github/workflows/main.yml`)
3. **Build**: Executes `npm run build`
4. **Deploy**: Pushes `dist/` folder to `gh-pages` branch
5. **Live**: Changes appear at `https://vendox-automation.github.io/projects`

### GitHub Actions Configuration

```yaml
# .github/workflows/main.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

### Manual Deployment

If needed, you can deploy manually:

```bash
# Build production bundle
npm run build

# Deploy to GitHub Pages manually
git subtree push --prefix dist origin gh-pages
```

### Custom Domain Setup

1. Add `CNAME` file to `src/` directory:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add `A` records pointing to GitHub Pages IPs
   - Or add `CNAME` record pointing to `username.github.io`

3. Enable HTTPS in GitHub repository settings

---

## ⚡ Performance Optimization

### Current Optimizations

✅ **Code Splitting**: Webpack splits vendor and app bundles  
✅ **Minification**: JavaScript and CSS minified in production  
✅ **Tree Shaking**: Unused code eliminated from bundles  
✅ **Image Optimization**: WebP format with fallbacks  
✅ **Lazy Loading**: Images loaded on-demand  
✅ **CDN Icons**: Icons served from jsDelivr CDN  

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint | < 1.5s | ~1.2s |
| Time to Interactive | < 3.0s | ~2.5s |
| Lighthouse Score | > 90 | 94 |
| Bundle Size (JS) | < 100KB | ~75KB |
| Bundle Size (CSS) | < 50KB | ~32KB |

### Optimization Checklist

- [ ] Compress all images before adding to `src/assets/images`
- [ ] Use WebP format with PNG/JPG fallbacks
- [ ] Minimize custom fonts usage
- [ ] Audit bundle size after adding dependencies: `npm run build -- --analyze`
- [ ] Test on slow 3G connection
- [ ] Verify lazy loading is working for images

---

## 🌐 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | 14+ |
| Chrome Mobile | 90+ |

**Note**: The site uses modern JavaScript (ES6+) features. For wider support, consider adding polyfills via Babel.

---

## 📊 Analytics & Monitoring

### Recommended Integrations

**Google Analytics** (Optional):
```javascript
// Add to src/templates/index.ejs
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Lighthouse CI** (Recommended):
Monitor performance metrics on every deployment.

---

## 🐛 Troubleshooting

### Common Issues

**Issue: Development server won't start**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run serve
```

**Issue: Build fails**
```bash
# Check for syntax errors in SASS files
npm run build -- --verbose
```

**Issue: Changes not showing in production**
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Verify GitHub Actions completed successfully
- Check `gh-pages` branch has latest changes

**Issue: Icons not loading**
- Verify icon URLs in `customIcons` are accessible
- Check browser console for CORS errors
- Ensure DevIcon CDN is not blocked

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style

- Use **ES6+** JavaScript features
- Follow **2-space indentation** for JavaScript
- Use **2-space indentation** for SASS
- Add **comments** for complex logic
- Keep **functions small** and focused

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Project Maintainer**: Vendox Automation  
**Live Site**: [https://vendox-automation.github.io/](https://vendox-automation.github.io/)  
**Issues**: [GitHub Issues](https://github.com/vendox-automation/portfolio/issues)

---

## 🙏 Acknowledgments

- **[EliasDevis](https://github.com/EliasDevis/EliasDevis.github.io)** - Original portfolio template that served as the foundation for this project
- **Devicon** - Developer icon library
- **Icons8** - Icon resources
- **Skill Icons** - Developer skill badges
- **Webpack** - Module bundler
- **GitHub Pages** - Free hosting

---

**Last Updated**: January 2026  
**Version**: 1.0.0