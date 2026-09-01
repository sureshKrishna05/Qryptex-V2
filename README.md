# Qryptex Website

<div align="center">
  <img src="https://img.shields.io/badge/Framework-Astro_6.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS_4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<br />

The official web platform for **Qryptex**, a security-first technology company specializing in Cybersecurity, Artificial Intelligence, Software Engineering, and Custom Technology Solutions.

[**Visit the Website**](https://qryptex.in)

---

## 🔒 Security First. Innovation Always.

Qryptex helps organizations build, secure, and scale technology systems through a zero-trust, security-first approach. We combine expertise in cybersecurity, software engineering, artificial intelligence, and custom technology development to deliver solutions designed for resilience, innovation, and long-term business value.

## ✨ Core Capabilities

- **🛡️ Cybersecurity Services:** Penetration testing, vulnerability assessments, and continuous security monitoring.
- **🧠 AI Solutions:** Intelligent automation, predictive analytics, and enterprise AI integrations.
- **💻 Software Engineering:** Scalable, secure, cloud-native custom software development.
- **⚙️ Custom Solutions:** DevSecOps, infrastructure architecture, and digital transformation.

---

## 🚀 Technical Architecture

Built with modern web standards, focusing on high performance, accessibility, and SEO optimization.

- **[Astro](https://astro.build/)**: Static Site Generation (SSG) for lightning-fast page loads and zero Javascript overhead where possible.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework (v4) with native Vite integration for rapid, scalable UI development.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed development environment for maximum code reliability.
- **[Zod](https://zod.dev/)**: Schema validation for secure runtime form handling.
- **[Resend](https://resend.com/)**: Reliable transactional email delivery for contact forms.

### Performance & SEO
- Automated Sitemap generation (`@astrojs/sitemap`).
- Strict JSON-LD Schema.org markup.
- View Transitions API enabled via `<ClientRouter />` for SPA-like navigation speeds.
- System-font stack implementation to eliminate render-blocking font requests.
- WAI-ARIA compliant semantic HTML and accessible navigation flows.

---

## 🛠️ Local Development

### Prerequisites
- **Node.js** (v22.x recommended)
- **pnpm** (Package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sureshKrishna05/Qryptex-V2.git
   cd Qryptex-V2
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   ```
   The site will be available at `http://localhost:4321`.

---

## 🏗️ Build & Deployment

This project is configured for seamless deployment on **Vercel** using the `@astrojs/vercel` adapter.

**Production Build:**
```bash
pnpm run build
```

**Local Preview:**
```bash
pnpm run preview
```

---

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI architecture
│   ├── navigation/  # Navbar, Footer, FlashNews
│   ├── seo/         # SEO management and JSON-LD
│   └── ui/          # Buttons, Containers, Typography
├── data/            # Centralized configuration and content (e.g., FAQ, Site info)
├── layouts/         # Page wrappers (BaseLayout, ServiceLayout)
├── pages/           # File-based routing (Astro Pages & API endpoints)
├── sections/        # Modular page blocks (Hero, Features, FAQ)
└── styles/          # Global CSS variables and Tailwind directives
```

---

## 📄 License

© 2026 Qryptex. All rights reserved. This repository and its contents are proprietary.
