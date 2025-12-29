# Cognipath Setup Guide

## Initial Setup

### 1. Install Node.js
Download from https://nodejs.org/ (v16 or higher recommended)

### 2. Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/cognipath.git
cd cognipath
\`\`\`

### 3. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 4. Start Development Server
\`\`\`bash
npm run dev
\`\`\`

The application will open at `http://localhost:3000`

## Configuration

### WhatsApp Integration
1. Replace `9304217862` with your WhatsApp number in `/src/api/messaging.js`
2. Ensure the number includes country code (India: +91)

### Environment Setup
Create `.env.local`:
\`\`\`env
VITE_API_BASE_URL=http://localhost:5000
VITE_WHATSAPP_PHONE=919304217862
\`\`\`

## Testing the App

### Test Accounts

**Guardian Account**
- Email: guardian@test.com
- Password: test123
- Role: Parent/Guardian

**Teacher Account**
- Email: teacher@test.com
- Password: test123
- Role: Tutor
- Subject: Mathematics
- Rate: ₹500/hr

**Admin Account**
- Email: admin@test.com
- Password: test123
- Role: Admin

### Test User Flow

1. **Signup as Guardian**
   - Visit http://localhost:3000/auth/signup
   - Choose Guardian role
   - Fill in details
   - Verify dashboard

2. **Find Tutors**
   - Go to Dashboard → Find Tutors
   - Search by subject
   - Click WhatsApp to contact

3. **Signup as Teacher**
   - Create tutor account
   - Complete profile
   - View student inquiries

4. **View Job Postings**
   - Visit http://localhost:3000/hiring
   - Apply for jobs
   - Manage applications

## Production Deployment

### Build for Production
\`\`\`bash
npm run build
\`\`\`

### Deploy to Vercel
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo
- **Railway**: Push to Git
- **Heroku**: Use Procfile

### MongoDB Setup (Production)
1. Create MongoDB Atlas account
2. Create cluster and database
3. Get connection string
4. Update `.env` with MongoDB URL

### Backend Setup (Node.js/Express)
Create a backend server to handle:
- Authentication with JWT
- Database operations
- WhatsApp API integration
- Payment processing

## Troubleshooting

### WhatsApp Not Working
- Ensure phone number includes country code
- Use international format: +91XXXXXXXXXX
- Check browser allows pop-ups

### Local Storage Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check DevTools → Application → Local Storage
- Verify data is saved

### Port Already in Use
\`\`\`bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
\`\`\`

## Next Steps

1. **Customize Branding**
   - Update logo in `/src/components/Navbar.jsx`
   - Modify colors in `/src/index.css`
   - Update company name

2. **Add Real Backend**
   - Replace mock APIs with Express.js
   - Setup MongoDB
   - Implement JWT authentication

3. **Payment Integration**
   - Add Stripe/Razorpay
   - Setup checkout flow
   - Manage transactions

4. **Email Notifications**
   - Setup SendGrid/Mailgun
   - Send verification emails
   - Session reminders

5. **Advanced Features**
   - Video calls (Jitsi/Zoom)
   - Content library
   - Progress tracking
   - AI matching algorithm

## Support

For issues: support@cognipath.com
