# Bader Eddine Dakhli - Portfolio

A modern, professional, and dynamic personal engineering portfolio website built with Next.js 15.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS
- **Content**: Markdown (via `marked` and `highlight.js`)
- **Image Optimization**: `sharp`

## ✨ Features

- **Home**: Professional overview and introduction.
- **About**: Detailed background and professional journey.
- **Projects**: Showcasing technical depth and project details.
- **Skills**: Dynamic visualization of technical expertise.
- **Blog**: Personal insights and technical articles.
- **Documents**: Access to relevant professional documents.
- **CV**: Integrated CV view and download.
- **Contact**: Direct communication channel.
- **AI Assistant**: Integrated AI chatbot for professional inquiries.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   *Fill in the required environment variables in `.env.local`.*

### Development

Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production application:
```bash
npm run build
```

## 📁 Project Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable React components.
- `src/data/`: JSON/Data files for dynamic content (experience, skills, etc.).
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Utility functions and library configurations.
- `src/styles/`: Global and component-specific CSS.
- `src/types/`: TypeScript type definitions.
- `public/`: Static assets (images, icons, etc.).

## 📄 License

This project is private and for personal use.
