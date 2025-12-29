# WhatsApp Integration Guide

## Overview

Cognipath integrates WhatsApp for direct communication between guardians/students and tutors. Using WhatsApp Web API for seamless messaging.

## Setup

### 1. Contact Information
\`\`\`
Business Contact: +91 9304217862
Country Code: +91 (India)
\`\`\`

### 2. Configuration
Update in `/src/api/messaging.js`:
\`\`\`javascript
const adminPhone = '919304217862' // Format: country code + number (no +)
\`\`\`

### 3. WhatsApp Business Account (Optional)
For production deployment:
1. Create WhatsApp Business Account
2. Get API access from Meta
3. Replace with production number
4. Setup message templates

## Features

### 1. Guardian/Student Perspective

**Access Points**:
- Floating widget (bottom-right)
- Tutor profile page
- Dashboard messages tab

**Actions**:
1. Click WhatsApp button
2. Pre-filled message appears
3. Message opens WhatsApp Web/App
4. Direct conversation starts

**Message Template**:
\`\`\`
From: [Guardian Name]
Tutor: [Tutor Name]

[Custom Message]
\`\`\`

### 2. Tutor Perspective

**Receiving Messages**:
- Messages to business number
- Can respond directly
- Build client relationships
- Quick response system

**Message Example**:
\`\`\`
From: Rajesh Sharma

Hi Priya, I'm interested in Math tuition for my daughter. 
Can we discuss rates and availability?
\`\`\`

### 3. Admin Perspective

**Central Hub**:
- All conversations in one number
- Route inquiries to tutors
- Monitor communications
- Support customers

## Implementation Details

### WhatsApp Widget Component

\`\`\`tsx
<WhatsAppWidget user={user} />
\`\`\`

Features:
- Floating button with badge
- Chat interface
- Message history
- Unread counter
- One-click send

### WhatsApp URL Format

\`\`\`
https://wa.me/919304217862?text=[Message]
\`\`\`

Parameters:
- Phone: International format (no +)
- Text: URL-encoded message
- Opens WhatsApp Web by default
- Falls back to app if available

### Message Handling

\`\`\`javascript
const message = `Hi ${tutorName}, I'm interested in ${subject} tuition.`
const encodedMessage = encodeURIComponent(message)
const url = `https://wa.me/919304217862?text=${encodedMessage}`
window.open(url, '_blank')
\`\`\`

## User Flow

### Step 1: Find Tutor
- Guardian browses tutors
- Clicks WhatsApp button
- Modal opens with message template

### Step 2: Send Message
- Guardian types custom message
- Clicks "Send on WhatsApp"
- Opens WhatsApp interface

### Step 3: Conversation
- Guardian and tutor message directly
- Discuss rates, availability
- Schedule sessions
- Build relationship

### Step 4: Follow-up
- Can continue on WhatsApp
- Or return to platform
- Book sessions through app
- Leave reviews

## Integration Points

### 1. Tutor Search Page
\`\`\`tsx
<button onClick={() => handleWhatsAppContact(tutor)}>
  <MessageCircle size={18} />
  WhatsApp
</button>
\`\`\`

### 2. Tutor Profile
\`\`\`tsx
<TutorContactCard tutor={tutor} onWhatsAppClick={handleContact} />
\`\`\`

### 3. Floating Widget
\`\`\`tsx
<WhatsAppWidget user={user} />
\`\`\`

### 4. Dashboard Messages
\`\`\`tsx
<button onClick={openWhatsApp}>
  Send WhatsApp Message
</button>
\`\`\`

## Best Practices

### For Guardians
1. ✅ Be clear and specific
2. ✅ Include child's grade/level
3. ✅ Mention subject interests
4. ✅ Ask about availability
5. ✅ Be professional and polite

### For Tutors
1. ✅ Respond within 24 hours
2. ✅ Be professional
3. ✅ Share rates clearly
4. ✅ Schedule sessions promptly
5. ✅ Maintain conversation history

### For Admin
1. ✅ Monitor conversations
2. ✅ Respond to inquiries quickly
3. ✅ Route messages to tutors
4. ✅ Maintain quality standards
5. ✅ Handle complaints promptly

## Troubleshooting

### WhatsApp Not Opening
\`\`\`
❌ Solution 1: Check phone number format
   - Ensure: 919304217862 (no + sign)

❌ Solution 2: Check browser permissions
   - Allow pop-ups for Cognipath

❌ Solution 3: Clear browser cache
   - Ctrl+Shift+Delete → Clear All
\`\`\`

### Message Not Sending
\`\`\`
❌ Solution 1: Check message length
   - Keep under 4096 characters

❌ Solution 2: Check encoding
   - Use UTF-8 encoding

❌ Solution 3: Verify phone number
   - Format: +[country][area][number]
\`\`\`

### Recipient Not Receiving
\`\`\`
❌ Solution 1: Verify WhatsApp availability
   - Ensure number has active WhatsApp

❌ Solution 2: Check message filters
   - May go to "Unknown" tab

❌ Solution 3: Check business hours
   - May auto-respond with hours
\`\`\`

## Analytics & Metrics

### Track Engagement
\`\`\`javascript
// Log WhatsApp interactions
analytics.track('whatsapp_click', {
  tutorId: tutor.id,
  userId: user.id,
  timestamp: new Date()
})
\`\`\`

### Message Tracking
\`\`\`javascript
// Track message sends
analytics.track('whatsapp_message_sent', {
  recipient: '919304217862',
  messageLength: message.length,
  templateUsed: true
})
\`\`\`

## Future Enhancements

- [ ] WhatsApp Business API integration
- [ ] Automated message templates
- [ ] Session scheduling via WhatsApp
- [ ] Payment through WhatsApp
- [ ] File/document sharing
- [ ] Video call integration
- [ ] Message encryption
- [ ] Read receipts

## Security & Privacy

### Data Protection
- No message storage in database (optional)
- Conversations handled by WhatsApp
- Encrypted end-to-end
- User privacy maintained

### Compliance
- GDPR compliant
- Data privacy policy
- User consent required
- Opt-out option available

## Support

### Common Issues
- WhatsApp account limits?
- Message rate limiting?
- Timezone handling?
- Multi-language support?

### Contact Support
- Email: support@cognipath.com
- Phone: +91 9304217862
- Help Center: cognipath.com/help

---

**Last Updated**: November 2025
**Integration Version**: 1.0
