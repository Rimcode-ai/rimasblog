# Rima Modak - Portfolio Website

A professional portfolio website showcasing 10+ years of AI/ML engineering expertise, built with Next.js, TypeScript, and Tailwind CSS.

## 🌐 Live Website
**https://rimcode-ai.github.io/rimasblog**

## 📋 Pages
- **Home** - Introduction and call-to-action
- **About** - Professional summary and technical skills
- **Experience** - Work history with detailed achievements
- **Education** - Degrees and certifications
- **Contact** - Contact form and professional links

## 🛠️ Technology Stack
- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🎨 Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Light mode (primary) + Dark mode toggle
- ✅ SEO optimized
- ✅ Fast static site generation
- ✅ Accessible components
- ✅ Contact form

## 🚀 Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Visit `http://localhost:3000` (local) or `http://localhost:3000/rimasblog` (simulating GitHub Pages basePath)

### Build
```bash
npm run build
```
Output: `./out` directory with static HTML/CSS/JS

## 📦 Project Structure
```
rimasblog/
├── pages/              # Next.js pages
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About & Skills
│   ├── experience.tsx  # Work history
│   ├── education.tsx   # Education & Certifications
│   ├── contact.tsx     # Contact page
│   ├── _app.tsx        # App wrapper
│   └── _document.tsx   # HTML document
├── components/         # Reusable React components
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── SkillCard.tsx
│   └── ExperienceCard.tsx
├── data/              # Resume data
│   └── resume.ts
├── styles/            # Global CSS
│   └── globals.css
├── .github/           # GitHub Actions
│   └── workflows/
│       └── deploy.yml
└── [config files]
```

## 🌍 Deployment to GitHub Pages

### Automatic Deployment (GitHub Actions)
Every push to `claude/create-portfolio-website-s8ksm` branch automatically:
1. Installs dependencies
2. Builds the Next.js project
3. Deploys to GitHub Pages

### Enable GitHub Pages
1. Go to your GitHub repository settings
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` (this is created automatically by GitHub Actions)
   - **Folder**: Select `/ (root)`
4. Click Save

**The site will be live at**: `https://rimcode-ai.github.io/rimasblog`

## 📝 Updating Content

### Resume Data
Edit `data/resume.ts` to update:
- Personal information
- Technical skills
- Work experience
- Education
- Certifications

Changes automatically reflect on all pages that use this data.

### Pages
- `pages/index.tsx` - Home page with hero section
- `pages/about.tsx` - About section and skills showcase
- `pages/experience.tsx` - Work experience timeline
- `pages/education.tsx` - Education and certifications
- `pages/contact.tsx` - Contact form and information

## 🎯 Current Features

### Home Page
- Eye-catching hero section with introduction
- Quick stats (10+ years experience, projects, certifications)
- Featured expertise sections
- Call-to-action buttons

### About Page
- Professional summary
- 10 technical skill categories
- 18 soft skills
- Contact quick info sidebar

### Experience Page
- 6 work positions with expandable details
- Company, location, and duration
- Key highlights and impact metrics
- Career summary timeline

### Education Page
- 2 degrees with GPAs
- 8 professional certifications
- Continuous learning section

### Contact Page
- Contact form (opens email client)
- Email, phone, LinkedIn, GitHub links
- Availability information

## 🔄 GitHub Actions Workflow

The `.github/workflows/deploy.yml` file:
- Triggers on push to `claude/create-portfolio-website-s8ksm`
- Installs Node.js dependencies
- Builds the Next.js project
- Deploys to `gh-pages` branch
- GitHub Pages serves the static site

## 📱 Responsive Design
The site is fully responsive:
- **Mobile**: Optimized for small screens
- **Tablet**: Adjusted layout and spacing
- **Desktop**: Full feature showcase

## 🎨 Theme Customization

### Dark Mode Toggle
Located in the Navigation component - users can click the sun/moon icon to switch between light and dark modes.

### Colors
Primary colors are defined in components and Tailwind utilities:
- Primary: Blue-600 (light mode), Blue-400 (dark mode)
- Backgrounds: White/Gray-50 (light), Gray-800/Gray-900 (dark)

Modify `components/Navigation.tsx` and `styles/globals.css` to customize colors.

## 📄 License
This portfolio is personal work.

## ✉️ Contact
- **Email**: rimamodakglobal06@gmail.com
- **Phone**: (669) 215-3876
- **LinkedIn**: linkedin.com/in/rimamodak
- **GitHub**: github.com/Rimcode-ai
