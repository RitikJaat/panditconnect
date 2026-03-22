# Quick Start Guide - PanditConnect React App

Get up and running in 5 minutes! 🚀

## Step 1: Install Node.js

Download and install from: **https://nodejs.org/**

Choose the LTS (Long Term Support) version - it's stable and recommended.

**Verify installation:**
```bash
node --version
npm --version
```

## Step 2: Install Dependencies

```bash
cd /home/m0nster/Desktop/WebApp/panditconnect-react
npm install
```

This downloads all required packages. Takes 2-3 minutes.

## Step 3: Start Development Server

```bash
npm run dev
```

Your browser will automatically open at `http://localhost:3000`

You should see the **PanditConnect** homepage with:
- Saffron-colored hero section
- Search bar for finding priests
- Service grid
- Featured priests
- How it works section

## Step 4: Explore the App

Click through these sections:

| Page | URL | Description |
|------|-----|-------------|
| Customer Home | `http://localhost:3000/` | Main homepage, search priests |
| For Priests | `http://localhost:3000/pandit-landing` | Why join page |
| Registration | `http://localhost:3000/pandit-onboarding` | Sign up as priest (4 steps) |
| Dashboard | `http://localhost:3000/pandit-dashboard` | Partner management hub |

## Hot Reload

Edit any file in `src/` folder - changes appear instantly in browser!

Try editing:
- `src/pages/HomePage.jsx` - Change hero text
- `src/index.css` - Modify styles
- `src/components/Navigation.jsx` - Update header

## Common Tasks

### Stop the server
Press `Ctrl+C` in terminal

### Production build
```bash
npm run build
```
Creates optimized `dist/` folder for deployment

### Check code quality
```bash
npm run lint
```

## Troubleshooting

### Port 3000 already in use?
```bash
# Change port in vite.config.js server.port to 3001
npm run dev -- --port 3001
```

### Module not found error?
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Blank page or errors?
Open browser DevTools (F12) and check Console tab for errors

## Project Structure Quick Reference

```
src/
├── pages/
│   ├── HomePage.jsx           ← Customer portal
│   ├── PanditLanding.jsx      ← Why join for priests
│   ├── PanditOnboarding.jsx   ← Registration form
│   └── PanditDashboard.jsx    ← Partner dashboard
├── components/
│   ├── Navigation.jsx         ← Header & menu
│   ├── Footer.jsx             ← Footer
│   ├── SearchBar.jsx          ← Search form
│   ├── ServiceCard.jsx        ← Service cards
│   ├── PanditCard.jsx         ← Priest profile card
│   └── Carousel.jsx           ← Item carousel
├── App.jsx                    ← Main routing
├── main.jsx                   ← Entry point
└── index.css                  ← Tailwind + styles
```

## Making Changes

### Update a component
Edit `src/components/Navigation.jsx` to change header
Edit `src/pages/HomePage.jsx` to change homepage

### Change colors
Edit `tailwind.config.js` - all Tailwind colors defined there

### Add a new page
1. Create file in `src/pages/NewPage.jsx`
2. Add import and route in `src/App.jsx`
3. Update `Navigation.jsx` with new link

## Deploy to Internet

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Follow prompts → Live in seconds!

### Option 2: Netlify
1. Run `npm run build`
2. Drag `dist/` folder to netlify.com
3. Done!

## Get Help

- Check README.md for detailed info
- Browser DevTools (F12) to debug
- Vite docs: https://vitejs.dev/
- React docs: https://react.dev/
- Tailwind docs: https://tailwindcss.com/

## Next Steps

- [ ] Replace placeholder images with real priest photos
- [ ] Connect to backend API
- [ ] Add real payment processing
- [ ] Implement user authentication
- [ ] Test on mobile devices
- [ ] Deploy to production

---

**Happy coding! 🙏**

Any questions? Open an issue or check the docs!
