# Cognipath - Complete Feature List

## 🏠 Home Page

### Hero Section
- Engaging headline and value proposition
- Call-to-action buttons (Sign Up, Browse Tutors)
- Visual statistics (5000+ tutors, 98% success rate, 50K+ students)

### Features Section
- Six key features with icons
- Hover effects and animations
- Responsive layout

### Success Metrics
- Real-time counter animations
- Trust indicators
- Social proof

## 👨‍🎓 Guardian Dashboard

### Find Tutors
- **Search & Filter**
  - Search by subject or tutor name
  - Filter by experience, ratings
  - Sort by price/rating

- **Tutor Cards**
  - Profile picture
  - Subject specialization
  - Hourly rates
  - Star ratings with review count
  - Years of experience
  - Location

- **Quick Actions**
  - WhatsApp contact button
  - View detailed profile
  - Save tutor (wishlist)

- **Detailed Tutor Profile**
  - Full bio and qualifications
  - Reviews and ratings
  - Availability calendar
  - Contact information
  - Direct WhatsApp chat

### My Tutors
- List of connected tutors
- Session history
- Quick contact options

### Sessions
- Upcoming sessions
- Past sessions history
- Session details
- Reschedule/cancel options
- Rate session

### Messages
- Conversation list
- Message history
- WhatsApp integration
- Real-time notifications

## 👨‍🏫 Teacher Dashboard

### Overview
- **Quick Stats**
  - Active students count
  - Total hours taught
  - Average rating
  - Monthly earnings

- **Profile Completion**
  - Progress bar
  - Missing fields checklist
  - Quick edit options

- **Weekly Availability**
  - Visual calendar
  - Available hours display

### My Students
- Student list with details
- Performance notes
- Contact options
- Session scheduling

### Job Postings
- **Create Jobs**
  - Job title input
  - Subject selection
  - Level selection (Beginner/Intermediate/Advanced)
  - Budget specification
  - Detailed description
  - Location details

- **Manage Jobs**
  - Job status (Open/Closed)
  - Application count
  - Applicant management
  - Accept/reject applicants
  - Job history

### Messages
- Student conversations
- Message history
- Quick reply templates

## 👨‍💼 Admin Dashboard

### Statistics
- Total users (Tutors + Guardians)
- Active sessions
- Total revenue
- Flagged issues

### User Management
- User listings
- Verification status
- Activity tracking
- Block/unblock users
- View user details

### Approvals
- New tutor applications
- Review qualifications
- Approve/reject
- Request additional info

### Platform Reports
- Monthly analytics
- User growth
- Revenue tracking
- Popular subjects
- Top tutors

## 💼 Hiring Page

### Job Listings
- **Search & Filter**
  - Search by job title
  - Filter by subject
  - Filter by level
  - Sort options

- **Job Cards**
  - Job title and description
  - Posted by
  - Subject and level
  - Location
  - Budget range
  - Application count
  - Application status

### Job Details
- Full job description
- Requirements
  - Timeline
  - Expectations
  - Qualifications

- **Action Buttons**
  - Apply for job
  - Save job (for later)
  - Message employer
  - View employer profile

## 🔐 Authentication

### Sign Up
- **Role Selection**
  - Guardian/Parent
  - Tutor

- **Guardian Sign Up**
  - Name, email, password
  - Phone number
  - Location
  - Children details
  - Subjects of interest

- **Tutor Sign Up**
  - Basic information
  - Subject specialization
  - Years of experience
  - Hourly rate
  - Bio/introduction
  - Qualifications
  - Availability

### Login
- Email and password
- Remember me option
- Forgot password link
- Role detection

### Session Management
- JWT tokens
- Auto-logout
- Session refresh
- Remember login

## 💬 WhatsApp Integration

### Features
- **Floating Widget**
  - Always accessible
  - Notification badge
  - Quick chat access

- **Direct Messaging**
  - Pre-filled templates
  - Chat history
  - Message notifications
  - Unread count

- **Contact Methods**
  - Click to open WhatsApp
  - Pre-populated messages
  - Tutor phone prefilled
  - Formatted conversation

- **Admin Contact**
  - Single contact number: +91 9304217862
  - All messages routed to admin
  - Quick response system

## ⭐ Reviews & Ratings

### Submit Review
- 5-star rating system
- Text review/comment
- Anonymous option
- Submit timestamp

### View Reviews
- Review list for tutors
- Sorted by recent
- Star display
- Helpful votes
- Average rating calculation

## 📬 Notifications

### Types
- **Session Notifications**
  - Session confirmed
  - Session reminders (1 day before)
  - Session completed
  - Session cancelled

- **Messages**
  - New message alerts
  - Conversation notifications

- **Job Notifications**
  - New applications
  - Application status updates
  - Job closed notifications

- **General**
  - Account updates
  - Profile verification
  - System announcements

### Notification Center
- Bell icon with unread count
- Notification list
- Mark as read
- Delete notifications

## 🎨 UI/UX Features

### Design System
- **Color Palette**
  - Primary: Indigo (#4f46e5)
  - Accent: Cyan (#06b6d4)
  - Dark background for accessibility
  - Gradient accents

- **Typography**
  - Clean sans-serif fonts
  - Hierarchical heading sizes
  - Readable line heights

- **Components**
  - Reusable buttons
  - Form inputs with validation
  - Cards and modals
  - Loading states
  - Error handling

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop experience
- Touch-friendly interactions

### Animations
- Smooth transitions
- Hover effects
- Loading animations
- Success feedback

## 🔧 Backend APIs

### Authentication APIs
- POST `/api/auth/signup`
- POST `/api/auth/login`
- POST `/api/auth/logout`
- GET `/api/auth/profile`
- PUT `/api/auth/profile`

### Tutors APIs
- GET `/api/tutors` (search/filter)
- GET `/api/tutors/:id`
- PUT `/api/tutors/:id` (profile update)
- POST `/api/tutors/:id/rate`
- GET `/api/tutors/:id/reviews`

### Sessions APIs
- GET `/api/sessions`
- POST `/api/sessions` (book)
- PUT `/api/sessions/:id`
- DELETE `/api/sessions/:id` (cancel)

### Jobs APIs
- GET `/api/jobs` (search/filter)
- GET `/api/jobs/:id`
- POST `/api/jobs` (create)
- PUT `/api/jobs/:id`
- DELETE `/api/jobs/:id`
- POST `/api/jobs/:id/apply`

### Messages APIs
- GET `/api/messages/:conversationId`
- POST `/api/messages`
- GET `/api/conversations`

### Reviews APIs
- GET `/api/reviews?tutorId=:id`
- POST `/api/reviews`
- PUT `/api/reviews/:id`
- DELETE `/api/reviews/:id`

## 📊 Data Models

### User Model
- ID, email, password
- Name, phone, avatar
- Role (guardian/teacher/admin)
- Bio, location, created at

### Tutor Model
- User reference
- Subject specialization
- Hourly rate, experience
- Rating, reviews
- Availability
- Verification status

### Session Model
- Tutor & student reference
- Scheduled date & duration
- Amount, status
- Notes & feedback

### Job Model
- Creator reference
- Title, description
- Subject, level
- Budget, location
- Applications
- Status

### Review Model
- Tutor & student reference
- Rating, comment
- Timestamp

## 🚀 Performance Features

- Lazy loading for images
- Code splitting
- Component optimization
- Smooth scrolling
- Fast load times
- Caching strategy

## 🔒 Security Features

- Password hashing
- JWT authentication
- Input validation
- XSS protection
- CSRF tokens
- Rate limiting
- Data encryption

## 📱 Mobile Optimization

- Responsive grid
- Touch-friendly buttons
- Mobile navigation
- Optimized images
- Fast load times
- Mobile-first CSS

## 🌐 Accessibility

- ARIA labels
- Semantic HTML
- Keyboard navigation
- Screen reader support
- Color contrast
- Focus indicators

---

**Last Updated**: November 2025
**Version**: 1.0.0
