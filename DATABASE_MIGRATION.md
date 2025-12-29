# Database Migration Guide for MongoDB

## Installation

1. **Install MongoDB Compass** (GUI)
   - Download from https://www.mongodb.com/products/compass

2. **Or use MongoDB Atlas** (Cloud)
   - Sign up at https://www.mongodb.com/cloud/atlas

## Create Collections

\`\`\`javascript
// Run these commands in MongoDB Shell or Compass

// Users Collection
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "name", "role", "password"],
      properties: {
        _id: { bsonType: "objectId" },
        email: { bsonType: "string" },
        name: { bsonType: "string" },
        password: { bsonType: "string" },
        phone: { bsonType: "string" },
        role: { enum: ["guardian", "teacher", "admin"] },
        avatar: { bsonType: "string" },
        location: { bsonType: "string" },
        bio: { bsonType: "string" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
})

// Tutors Collection
db.createCollection("tutors")

// Sessions Collection
db.createCollection("sessions")

// Jobs Collection
db.createCollection("jobs")

// Reviews Collection
db.createCollection("reviews")

// Create Indexes
db.users.createIndex({ email: 1 })
db.tutors.createIndex({ subject: 1 })
db.jobs.createIndex({ status: 1 })
\`\`\`

## Seed Sample Data

\`\`\`javascript
// Insert sample tutors
db.users.insertMany([
  {
    email: "priya@cognipath.com",
    name: "Priya Sharma",
    password: "hashed_password",
    phone: "+919876543210",
    role: "teacher",
    location: "Delhi",
    subject: "Mathematics",
    hourlyRate: 500,
    experience: 8,
    rating: 4.9,
    reviews: 127,
    createdAt: new Date()
  },
  {
    email: "rajesh@cognipath.com",
    name: "Rajesh Kumar",
    password: "hashed_password",
    phone: "+919765432109",
    role: "teacher",
    location: "Mumbai",
    subject: "Physics",
    hourlyRate: 450,
    experience: 6,
    rating: 4.8,
    reviews: 98,
    createdAt: new Date()
  }
])
\`\`\`

## Migration from LocalStorage to MongoDB

\`\`\`javascript
// Script to migrate data
const users = JSON.parse(localStorage.getItem('cognipath_users') || '[]')
const tutors = JSON.parse(localStorage.getItem('cognipath_tutors') || '[]')

// POST to backend API
await fetch('/api/migrate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ users, tutors })
})
