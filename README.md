# PanditConnect - React + Vite + Tailwind CSS

A modern, responsive web application connecting devotees with verified Hindu priests for spiritual services.

## Features

- **Customer Portal**: Browse priests, search services, book ceremonies
- **Pandit Portal**: Landing page, multi-step onboarding, admin dashboard
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern Stack**: React 18, Vite, Tailwind CSS, React Router
- **Component-Based**: Modular, reusable components
- **No Build Dependencies**: Clean, maintainable codebase

## Project Structure

```
panditconnect-react/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Header with mobile menu
│   │   ├── Footer.jsx              # Footer section
│   │   ├── SearchBar.jsx           # Service search form
│   │   ├── ServiceCard.jsx         # Service card component
│   │   ├── PanditCard.jsx          # Priest profile card
│   │   └── Carousel.jsx            # Item carousel
│   ├── pages/
│   │   ├── HomePage.jsx            # Customer portal homepage
│   │   ├── PanditLanding.jsx       # Why join page for priests
│   │   ├── PanditOnboarding.jsx    # Multi-step registration form
│   │   └── PanditDashboard.jsx     # Partner management hub
│   ├── hooks/                      # Custom React hooks (future)
│   ├── App.jsx                     # Main app with routing
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Tailwind + custom styles
├── public/                         # Static assets
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind theme
├── postcss.config.js               # PostCSS config
├── package.json                    # Dependencies & scripts
└── .gitignore                      # Git ignore rules
```

## Installation

### Prerequisites
- **Node.js** 16+ and npm (or yarn, pnpm)
- Download from: https://nodejs.org/

### Setup Steps

1. **Navigate to project directory**
```bash
cd /home/m0nster/Desktop/WebApp/panditconnect-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

## Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint code checks

## Quick Navigation

- **Customer Portal**: `http://localhost:3000/`
- **Pandit Landing**: `http://localhost:3000/pandit-landing`
- **Priest Registration**: `http://localhost:3000/pandit-onboarding`
- **Pandit Dashboard**: `http://localhost:3000/pandit-dashboard`

## Design System

### Colors
- **Saffron** (#FF9933) - Primary (Customer portal)
- **Vermillion** (#D32F2F) - Accent (Pandit portal)
- **Gold** (#FFB300) - Highlight
- **Cream** (#FFF4E6) - Background accent
- **Off-white** (#F9F8F6) - Light background

### Typography
- **Serif** (Georgia): Headings and titles
- **Sans** (Segoe UI): Body text

### Spacing & Sizing
- 9-point spacing scale (xs to 4xl)
- 6 responsive breakpoints (320px to 1400px+)
- Tailwind CSS utilities for all styling

## Key Pages

### HomePage
- Hero section with search
- Service grid (8 services)
- Featured priests carousel
- How it works section
- Testimonials
- Call-to-action

### PanditLanding
- Partner value proposition
- Why join section (6 benefits)
- How it works carousel
- Benefits grid
- Testimonials from priests
- FAQ accordion
- Call-to-action

### PanditOnboarding
- 4-step registration form
  1. Basic info (name, email, phone, experience)
  2. Credentials (qualifications, specializations, languages)
  3. Services (pricing, bio)
  4. Review (confirmation)
- Progress bar
- Form validation
- Success message

### PanditDashboard
- Overview with stats and charts
- Bookings management with tabs
- Services management
- Earnings & payouts
- Profile management
- Responsive sidebar navigation

## Customization

### Tailwind Theme
Edit `tailwind.config.js` to customize:
- Colors
- Typography
- Spacing
- Animations
- Breakpoints

### Components
All components in `src/components/` are reusable and accept props for customization.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Production build with minification
- CSS purging (unused styles removed)
- Code splitting via Vite
- Optimized images

## Building for Production

```bash
npm run build
```

Output will be in `dist/` directory. Deploy these files to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Deployment Example (Vercel)

1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Vite project
4. Click Deploy - done!

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Payment gateway
- [ ] Video call integration
- [ ] Calendar/scheduling
- [ ] Real-time notifications
- [ ] Admin panel
- [ ] Analytics dashboard

## Support

For issues or questions, refer to:
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Router Docs](https://reactrouter.com/)

## License

MIT License - feel free to use for your projects
