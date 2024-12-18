# NextFit Coach

A personalized fitness coaching application built with React and Supabase.

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Supabase credentials

```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

The following environment variables are required:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

You can find these values in your Supabase project settings under Project Settings > API.

## Features

- Personalized workout plans
- Progress tracking
- Multi-language support (English and French)
- PDF export of workout plans
- Mobile-responsive design

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- NextUI
- Supabase
- i18next