# Implementation Plan - Saburi Restaurant Website

## Goal Description
Create a professional, SEO-optimized official website for "Japanese-style Chinese Saburi" (和風中華 佐分利). The site will be built using Next.js to ensure high performance, SEO capabilities (SSR/SSG), and maintainability. The design will follow a "Royal Restaurant" layout with a focus on food photography, clear navigation, and easy access to contact info (NAP).

## User Review Required
> [!IMPORTANT]
> - **Framework**: Using **Next.js** for better SEO and multi-page management.
> - **Styling**: Using **Vanilla CSS (CSS Modules)** as per guidelines. no Tailwind.
> - **Existing Files**: Current files in `saburi-restaurant` will be backed up to `legacy_backup` before initialization.

## Proposed Changes

### Project Setup
#### [MODIFY] [saburi-restaurant](file:///C:/Users/minna/.gemini/antigravity/scratch/saburi-restaurant)
- Move existing files to `legacy_backup`.
- Initialize Next.js project (`npx create-next-app`).
- Configure `next.config.js` if needed.

### Design System & Global Styles
- **Colors**:
    - Base: White/Off-white (`#fcfaf2` or similar)
    - Accent: Deep Red/Vermilion (`#bf2e2e` ?)
    - Text: Black/Dark Gray (`#333333`)
- **Typography**: Serif for headings (Mincho), Sans-serif for body (Gothic).
- **CSS**: `app/globals.css` for variables and global resets.

### Components
#### [NEW] [Header](file:///components/Header/Header.js)
- Logo, Navigation, CTA Buttons.
#### [NEW] [Footer](file:///components/Footer/Footer.js)
- NAP info, Map link, Copyright.
#### [NEW] [Layout](file:///components/Layout/Layout.js)
- Wraps pages, handles Breadcrumbs (except Home).

### Pages
#### [NEW] [page.js](file:///app/page.js) (Home)
- Hero Slider, Recommended Menu, News Feed snippet.
#### [NEW] [/menu/page.js](file:///app/menu/page.js)
- Lunch, Dinner, Takeout sections.
#### [NEW] [/access/page.js](file:///app/access/page.js)
- Map, Parking diagram.
#### [NEW] [/faq/page.js](file:///app/faq/page.js)
- Accordion or list style FAQ.
- Structure structured data (JSON-LD).
#### [NEW] [/seats/page.js](file:///app/seats/page.js)
#### [NEW] [/photos/page.js](file:///app/photos/page.js)
#### [NEW] [/contact/page.js](file:///app/contact/page.js)

## Verification Plan
### Automated Tests
- Build verification (`npm run build`).
- SEO check (check meta tags in output).

### Manual Verification
- Mobile responsiveness check (Constraint Layout).
- Navigation links check.
- Google Maps link check.
