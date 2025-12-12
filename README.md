# Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized with Vite
- 🎯 Type-safe with TypeScript
- 🎨 Styled with Tailwind CSS and shadcn-ui components
- 📝 Easy content customization via configuration file

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui (Radix UI)
- **Package Manager**: Bun (or npm/yarn)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/docs/installation) (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akmukhi/akmukhi.github.io.git
cd akmukhi.github.io
```

2. Install dependencies:
```bash
bun install
# or
npm install
# or
yarn install
```

3. Start the development server:
```bash
bun run dev
# or
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:8080`

### Building for Production

```bash
bun run build
# or
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
bun run preview
# or
npm run preview
# or
yarn preview
```

## Customization

All portfolio content is centralized in `src/config/portfolio.ts`. Simply edit this file to customize:

- Personal information (name, title, bio, email, location)
- Social media links
- Skills and technologies
- Projects with descriptions, technologies, and links
- Statistics (years of experience, projects completed, etc.)
- About section content

### Example Configuration

```typescript
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Full-Stack Developer",
    email: "your.email@example.com",
    // ...
  },
  // ...
};
```

## Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn-ui components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── config/          # Configuration files
│   │   └── portfolio.ts # Portfolio content
│   ├── pages/           # Page components
│   ├── lib/             # Utility functions
│   └── hooks/           # Custom React hooks
├── public/              # Static assets
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## Deployment

### GitHub Pages

This repository is configured for GitHub Pages deployment. The site will automatically deploy when you push to the `main` branch.

1. Ensure your repository is named `username.github.io` (where `username` is your GitHub username)
2. Go to Settings > Pages in your GitHub repository
3. Select the source branch (usually `main` or `gh-pages`)
4. Select the folder containing the built files (usually `/dist` or `/root`)

For manual deployment:

```bash
# Build the project
bun run build

# The dist folder contains the built files
# You can deploy this folder to any static hosting service
```

### Other Hosting Services

The built `dist` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any other static hosting provider

## Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run build:dev` - Build in development mode
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

### Environment Variables

For GitHub Pages deployment, set the `GITHUB_PAGES` environment variable:

```bash
GITHUB_PAGES=true bun run build
```

This ensures the correct base path is used in the build.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
