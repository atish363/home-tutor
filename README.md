# Cognipath - Home Tutoring Platform

A modern, full-featured web application connecting students/guardians with expert tutors. Built with Vite, React, Tailwind CSS, and featuring WhatsApp integration for direct communication.

## Features

### 🎓 For Guardians
- **Find Tutors**: Browse and search qualified tutors by subject and expertise
- **Direct WhatsApp Communication**: Contact tutors directly through WhatsApp
- **Tutor Profiles**: View detailed tutor information, ratings, reviews, and experience
- **Session Management**: Book and manage tutoring sessions
- **Reviews & Ratings**: Read and submit reviews for tutors

### 👨‍🏫 For Tutors
- **Professional Profile**: Showcase qualifications, experience, and specializations
- **Job Opportunities**: Find and apply for tutoring jobs
- **Student Management**: Manage your students and sessions
- **Earnings Tracking**: Track hours taught and earnings
- **Direct Messaging**: Communicate with students via WhatsApp

### 👨‍💼 For Admins
- **Platform Management**: Oversee all users and activities
- **User Approval**: Review and approve new tutors
- **Analytics Dashboard**: Track platform metrics and growth
- **Dispute Resolution**: Handle conflicts and complaints

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router
- **Icons**: Lucide React
- **Communication**: WhatsApp Business API (contact: +91 93042 17862)
- **Database**: MongoDB (recommended for production)
- **State Management**: React Context/Hooks
- **Local Storage**: Mock database for demo

## Getting Started

### Installation

1. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

2. **Start development server**
\`\`\`bash
npm run dev
\`\`\`

3. **Open in browser**
Navigate to `http://localhost:3000`

### Build for Production

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Project Structure

\`\`\`
cognipath/
├── src/
│   ├── components/
│   │   ├── dashboards/          # Role-specific dashboards
│   │   ├── ui/                  # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppWidget.jsx
│   │   ├── ReviewCard.jsx
│   │   └── NotificationCenter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Auth.jsx
│   │   ├── Dashboard.jsx
│   │   └── Hiring.jsx
│   ├── api/
│   │   ├── auth.js              # Authentication API
│   │   ├── tutors.js            # Tutors API
│   │   ├── jobs.js              # Job postings API
│   │   ├── sessions.js          # Session bookings API
│   │   ├── messaging.js         # WhatsApp integration
│   │   ├── reviews.js           # Reviews API
│   │   └── notifications.js     # Notifications API
│   ├── hooks/
│   │   └── useAuth.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── images/
│   └── icons/
├── vite.config.js
├── tailwind.config.js
└── package.json
\`\`\`

## Database Schema (MongoDB)

### Users Collection
\`\`\`javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: "guardian" | "teacher" | "admin",
  phone: String,
  avatar: String,
  bio: String,
  location: String,
  createdAt: Date,
  updatedAt: Date,
  
  // For teachers
  subject: String,
  hourlyRate: Number,
  experience: Number,
  qualifications: [String],
  rating: Number,
  reviews: Number,
  isVerified: Boolean,
  
  // For guardians
  children: [
    {
      name: String,
      grade: String,
      subjects: [String]
    }
  ]
}
\`\`\`

### Tutors Collection
\`\`\`javascript
{
  _id: ObjectId,
  userId: ObjectId,
  subject: String,
  expertise: [String],
  hourlyRate: Number,
  experience: Number,
  bio: String,
  rating: Number,
  reviewCount: Number,
  availability: {
    monday: [{ start: String, end: String }],
    // ... other days
  },
  location: String,
  isActive: Boolean,
  createdAt: Date
}
\`\`\`

### Sessions Collection
\`\`\`javascript
{
  _id: ObjectId,
  tutorId: ObjectId,
  studentId: ObjectId,
  subject: String,
  scheduledDate: Date,
  duration: Number,
  hourlyRate: Number,
  totalAmount: Number,
  status: "pending" | "confirmed" | "completed" | "cancelled",
  notes: String,
  createdAt: Date
}
\`\`\`

### Jobs Collection
\`\`\`javascript
{
  _id: ObjectId,
  posterId: ObjectId,
  title: String,
  subject: String,
  level: String,
  description: String,
  location: String,
  budgetMin: Number,
  budgetMax: Number,
  applications: [
    {
      applicantId: ObjectId,
      status: "pending" | "accepted" | "rejected",
      appliedAt: Date
    }
  ],
  status: "open" | "closed",
  createdAt: Date
}
\`\`\`

### Reviews Collection
\`\`\`javascript
{
  _id: ObjectId,
  tutorId: ObjectId,
  studentId: ObjectId,
  rating: Number (1-5),
  comment: String,
  createdAt: Date
}
\`\`\`

## WhatsApp Integration

The platform integrates WhatsApp for direct communication between guardians/students and tutors.

### Configuration
- **Contact Number**: +91 9304217862
- **Integration Type**: WhatsApp Web API
- **Features**:
  - Direct messaging from guardian dashboard
  - One-click tutor contact
  - Message history
  - Session reminders

### How to Use
1. Click WhatsApp button on tutor profile
2. Pre-filled message template appears
3. Send message opens WhatsApp
4. Direct conversation with tutor

## Environment Variables

Create a `.env.local` file:

\`\`\`env
VITE_API_BASE_URL=http://localhost:5000
VITE_WHATSAPP_PHONE=919304217862
VITE_APP_NAME=Cognipath
\`\`\`

## Key Features Implementation

### 1. Authentication
- Email/password signup and login
- Role-based access control
- Session management with localStorage

### 2. Tutor Discovery
- Search and filter tutors
- View detailed profiles
- Star ratings and reviews
- Hourly rate display

### 3. WhatsApp Integration
- Direct messaging widget
- Pre-filled templates
- Message history
- Real-time notifications

### 4. Job Posting
- Post tutoring opportunities
- Track applications
- Accept/reject applicants
- Manage active jobs

### 5. Reviews System
- Submit and view reviews
- Star ratings
- Anonymous reviews
- Tutor rating updates

### 6. Notifications
- Activity notifications
- Message alerts
- Session reminders
- New opportunity alerts

## Future Enhancements

- [ ] Video call integration (Jitsi/Zoom)
- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Availability calendar
- [ ] Advanced search filters
- [ ] Admin analytics dashboard
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] AI-powered tutor matching
- [ ] Content library sharing
- [ ] Progress tracking

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Support

For support, contact: support@cognipath.com
Emergency: +91 9304217862

## License

MIT License - see LICENSE file for details

---

Built with ❤️ for education excellence
