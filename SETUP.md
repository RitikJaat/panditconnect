# PanditConnect - Full Stack Setup Guide

Complete guide to run PanditConnect with frontend + backend locally.

## Prerequisites

- **Node.js** v16 or higher
- **PostgreSQL** v12 or higher
- **Git**
- **Stripe Account** (for payments)

## Quick Start

### 1. Backend Setup

```bash
cd panditconnect-backend

# Install dependencies
npm install

# Create .env file with your config
cp .env.example .env

# Edit .env with your database and Stripe credentials
nano .env
```

**Required .env values:**
```
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=panditconnect
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
FRONTEND_URL=http://localhost:3000
```

```bash
# Create PostgreSQL database
createdb panditconnect

# Start backend server (runs on port 5000)
npm run dev
```

### 2. Frontend Setup

```bash
cd panditconnect-react

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Verify .env has correct API URL
cat .env
# Should show: VITE_API_URL=http://localhost:5000/api

# Start frontend server (runs on port 3000)
npm run dev
```

## Architecture

```
Frontend (React + Vite)          Backend (Express + PostgreSQL)
   :3000                              :5000
   ├─ Login/Register                  ├─ /api/auth
   ├─ Browse Services                 ├─ /api/pandits
   ├─ Book Pandits                    ├─ /api/bookings
   └─ Dashboard                       └─ /api/payments
        ↓                                  ↓
   JWT Token Storage             PostgreSQL DB
   (localStorage)                (Users, Bookings, Payments)
```

## Authentication Flow

1. User enters credentials on Login page
2. Frontend sends POST to `/api/auth/login`
3. Backend validates & returns JWT token
4. Frontend stores token in localStorage
5. All subsequent API calls include token in Authorization header
6. Backend middleware verifies token on protected routes

## API Integration

Frontend uses the `api` utility for all backend calls:

```javascript
import api from '@/utils/api'

// Example: Fetch pandits
const pandits = await api.get('/pandits/search?location=Delhi')

// Example: Create booking
const booking = await api.post('/bookings', {
  panditId: 1,
  serviceId: 2,
  bookingDate: '2024-01-20'
})
```

The token is automatically added to all requests via the `Authorization` header.

## Test Workflow

### Create Test Accounts

1. **Customer Account**
   - Go to http://localhost:3000/signup
   - Select "I'm a Customer"
   - Fill form & create account
   - Redirects to `/dashboard`

2. **Pandit Account**
   - Go to http://localhost:3000/signup
   - Select "I'm a Pandit"
   - Fill form & create account
   - Redirects to `/pandit-onboarding`

### Test Booking Flow

1. Customer logs in → `/dashboard`
2. Click "Book Pandit" → `/book-pandit`
3. Select pandit & service → Confirm booking
4. Create payment intent via Stripe
5. Complete payment (use Stripe test card: `4242 4242 4242 4242`)
6. Booking confirmed!

### Test Pandit Features

1. Pandit logs in → `/pandit-dashboard`
2. See bookings from customers
3. Update booking status (confirm/complete)
4. View earnings & payments
5. Manage services

## Development Tools

### Useful Commands

```bash
# Frontend
cd panditconnect-react
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build

# Backend
cd panditconnect-backend
npm run dev         # Start with nodemon
npm start           # Start normally
npm run migrate     # Run database migrations
npm run seed        # Seed test data (if available)
```

### Testing API Endpoints

Use Postman or similar tool:

1. Create environment in Postman with:
   - `base_url`: http://localhost:5000/api
   - `token`: (updated after login)

2. Test endpoints:
   ```
   POST /auth/register
   POST /auth/login  → saves token
   GET /auth/me
   GET /pandits/search
   POST /bookings
   POST /payments/create-intent
   ```

## Troubleshooting

### "Port already in use"
```bash
# Kill process on port
lsof -i :5000
kill -9 <PID>

# Or change PORT in .env
PORT=5001
```

### "Cannot connect to database"
```bash
# Check PostgreSQL is running
psql -U postgres

# Create database if missing
createdb panditconnect
```

### "JWT token invalid"
- Clear localStorage: `localStorage.clear()`
- Delete `.env` and reconfigure
- Restart both servers

### "CORS errors"
- Ensure `FRONTEND_URL` in backend .env is correct
- Frontend must be on correct port (3000)
- Check backend CORS middleware

### "Payment fails"
- Use Stripe test keys (start with `sk_test_` and `pk_test_`)
- Test card: `4242 4242 4242 4242`, any future date, any CVC

## Next Steps

### Before Production

- [ ] Database: Move to managed service (AWS RDS, Heroku Postgres)
- [ ] Backend: Deploy to Render, Railway, or AWS
- [ ] Frontend: Deploy to Vercel or Netlify
- [ ] Stripe: Switch to live keys
- [ ] Email: Configure SMTP for notifications
- [ ] Logging: Add error tracking (Sentry)
- [ ] Testing: Add unit & integration tests
- [ ] Security: Add rate limiting, HTTPS, secure headers

### Production Deployment

1. Backend → Deploy to Render/Railway
2. Frontend → Deploy to Vercel
3. Configure environment variables on each platform
4. Update FRONTEND_URL in backend
5. Update VITE_API_URL in frontend
6. Enable HTTPS everywhere
7. Set up monitoring & logging

## Support

For issues or questions:
1. Check backend logs: `npm run dev`
2. Check browser console (F12)
3. Check network tab (API calls)
4. Review .env configuration
5. Clear cache & restart both servers

## Resources

- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Stripe API Docs](https://stripe.com/docs/api)
- [JWT.io](https://jwt.io/)
