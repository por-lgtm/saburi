# Saburi Restaurant Website Walkthrough

I have successfully created a professional, SEO-optimized website for **Japanese-style Chinese Saburi (和風中華 佐分利)**. The site is built with Next.js and customized Vanilla CSS to meet the "Royal Restaurant" design requirements.

## Features Implemented

### 1. Royal & Professional Standard Design
- **Theme**: "Clean & Appetizing" using Off-white (`#fcfaf2`), Deep Red (`#bf2e2e`), and Black.
- **Typography**: Optimized for Japanese readability (Serif for headings, Sans for body).
- **Mobile First**: Fixed CTA bar on mobile (simulated in Header for now), responsive grid layouts.

### 2. Required Pages & functionality
- **Home (`/`)**: Hero section, Concept, Recommended Menu highlights.
- **Menu (`/menu`)**: Categorized lists for Lunch, Dinner, and Takeout.
- **Access (`/access`)**:
  - Google Maps Embed.
  - "Open in Google Maps" button.
  - Parking diagrams placeholder.
- **FAQ (`/faq`)**: SEO-optimized with structured data (JSON-LD).
- **Accessory Pages**: Placeholders for Seats, Photos, Coupons, Contact, News (ready for future content).

### 3. SEO Optimization
- **Metadata**: Custom Title and Description for every page.
- **Structured Data**: `FAQPage` schema implemented on the FAQ page.
- **Semantic HTML**: Proper use of `<header>`, `<footer>`, `<main>`, `<section>`.

## File Structure
- `src/app/globals.css`: Global design system variables.
- `src/app/layout.js`: Root layout with Font loading and Header/Footer.
- `src/components/`: Reusable Header and Footer components.
- `src/app/[page]/page.js`: Individual page logic and specific metadata.

## How to Verify & Run

### 1. Installation
Dependencies should be installed automatically. If not:
```bash
npm install
```

### 2. Development Server
To preview the site locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
To verify the build for deployment:
```bash
npm run build
```

## Next Steps
- Replace image placeholders (e.g., `/images/lunch-course.jpg`) with actual photos.
- Update `access-map.png` with the real parking map file.
- Add actual content to `/seats`, `/photos` when available.
