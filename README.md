# My App - Next.js + Sanity Blog

A simple blog application built with Next.js 15 and Sanity CMS.

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd my-app
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

4. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page with blog posts
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── studio/           # Sanity Studio
│       └── [[...tool]]/
│           └── page.tsx  # Studio page
└── lib/
    ├── sanity.client.ts  # Sanity client configuration
    ├── sanity.image.ts   # Image URL helper
    └── services/
        └── posts.ts      # Posts data fetching
```

## Dependencies

### Main Dependencies
- **Next.js 15.4.6** - React framework
- **React 19.1.0** - UI library
- **next-sanity 10.0.10** - Sanity integration for Next.js
- **@sanity/image-url 1.1.0** - Image URL builder
- **@sanity/vision 4.3.0** - Sanity query tool
- **groq 4.3.0** - Sanity query language
- **Tailwind CSS 4** - Styling framework

### Dev Dependencies
- **TypeScript 5** - Type safety
- **ESLint 9** - Code linting
- **@sanity/types 4.3.0** - Sanity TypeScript types

## Features

- Server-side rendered blog posts
- Sanity CMS integration
- Responsive image handling
- Clean, modern UI with Tailwind CSS
- TypeScript support
- ESLint configuration

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Sanity Studio

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage your content.

### Post Schema
- **Title** - Post title
- **Slug** - URL slug (auto-generated from title)
- **Cover Image** - Featured image for the post
