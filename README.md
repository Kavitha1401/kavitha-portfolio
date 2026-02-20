# Kavitha's Portfolio — React + Vite

A warm, cozy developer portfolio built with React and Vite.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Structure

```
src/
├── components/
│   ├── Cursor.jsx         — Custom animated cursor
│   ├── Nav.jsx            — Sticky navigation with active section highlight
│   ├── Hero.jsx           — Hero section with animated SVG character
│   ├── Character.jsx      — Illustrated character SVG (feminine, cozy)
│   ├── About.jsx          — Bio, education, awards, highlights
│   ├── Experience.jsx     — Work experience with project cards
│   ├── Skills.jsx         — Categorized skill grid
│   ├── Projects.jsx       — Project cards with modal detail view
│   ├── Contact.jsx        — Contact form + links
│   ├── Footer.jsx         — Simple footer
│   └── useReveal.js       — Scroll-triggered reveal hook
├── App.jsx
├── main.jsx
└── index.css              — Global styles, design tokens, animations
```

## 🎨 Design

- **Palette**: Cream, Terracotta, Sage Green, Mustard, Dusty Pink
- **Fonts**: Fraunces (display) + DM Sans (body) — via Google Fonts
- **Animations**: CSS keyframes + IntersectionObserver scroll reveals
- **Character**: Custom SVG illustration (no external assets needed)

## 🛠 Customization

All content lives in the component files as plain JS arrays/objects:
- Projects → `src/components/Projects.jsx`
- Skills → `src/components/Skills.jsx`  
- Experience → `src/components/Experience.jsx`
- Contact links → `src/components/Contact.jsx`

Design tokens (colors, fonts) → `src/index.css` `:root` block
