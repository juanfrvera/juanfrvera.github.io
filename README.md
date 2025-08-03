# Juan Vera - Portfolio

A modern, minimalist portfolio website showcasing my work as a Full Stack Engineer. Built with Next.js and optimized for performance with static site generation.

🌐 **Live Site**: [https://juanvera.dev](https://juanvera.dev)

## 🚀 About

Full Stack Engineer with dynamic years of experience calculation (currently showing years since 2020). I specialize in creating minimalist websites that focus on functionality and performance while keeping the essence of each application.

## 🛠️ Featured Projects

### Finances
**Manage your accounts, set reminders for debts and services**
- [Live Demo](https://juanvera.dev/finances)
- Financial management application
- Account tracking and debt reminders

### Encarga
**Complete e-commerce solution**
- [Live Demo](https://encargarpedido.web.app/)
- Create your shop
- Let your clients order
- Receive automatic messages

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: GitHub Pages with GitHub Actions
- **Image Optimization**: Next.js Image component
- **Static Generation**: Full SSG for optimal performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/juanfrvera/juanfrvera.github.io.git
cd juanfrvera.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Building for Production

```bash
# Build static site
npm run build

# Preview production build locally
npm run start
```

Static files will be generated in the `out` directory.

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Actions deployment
├── public/
│   ├── mountains-cut.jpg       # Hero background image
│   ├── finances.png           # Finances project screenshot
│   └── encarga.webp           # Encarga project screenshot
├── src/
│   └── app/
│       ├── layout.tsx         # Root layout with SEO metadata
│       ├── page.tsx          # Main portfolio page
│       └── globals.css       # Global styles
├── next.config.ts            # Next.js configuration (static export)
└── package.json             # Dependencies and scripts
```

## 🎨 Key Features

- **Dynamic Experience Calculation**: Years of experience automatically calculated from 2020
- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Comprehensive meta tags and Open Graph support
- **Performance First**: Static generation for lightning-fast loading
- **Professional Minimalism**: Clean design focusing on content
- **Accessibility**: Built with web accessibility best practices

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The workflow:

1. Triggers on pushes to `master` or `main` branch
2. Builds the Next.js application
3. Generates static files
4. Deploys to GitHub Pages

### Manual Deployment

```bash
# Build and deploy
npm run build
# Upload the 'out' directory to your hosting provider
```

## 🔧 Customization

### Updating Projects
Edit `src/app/page.tsx` to modify the projects section:
- Add new projects in the projects grid
- Update project descriptions, links, and images
- Customize the layout and styling

### Styling
Uses Tailwind CSS for styling. Key customization points:
- Colors and typography in `src/app/globals.css`
- Component styling in `src/app/page.tsx`
- Tailwind configuration in `tailwind.config.ts`

### Content Updates
- **Hero Section**: Update title, description in `src/app/page.tsx`
- **SEO Metadata**: Modify `src/app/layout.tsx`
- **Images**: Replace files in `public/` directory

## � Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Static Generation**: Pre-rendered at build time
- **Image Optimization**: Next.js Image component with WebP support
- **Minimal JavaScript**: Only essential client-side code

## 🤝 Connect

- **Portfolio**: [https://juanvera.dev](https://juanvera.dev)
- **LinkedIn**: [https://www.linkedin.com/in/juan-vera/](https://www.linkedin.com/in/juan-vera/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Previously built with Nuxt.js, migrated to Next.js for better performance and deployment flexibility.**
