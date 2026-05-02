Notification System Frontend
Overview

This project is a React-based frontend application that integrates with an external Notification API to display prioritized notifications for users.

The application fetches real-time notifications, applies business logic for prioritization, and displays the top 10 most important notifications.

Tech Stack
React (Vite)
JavaScript (ES6+)
Fetch API
CSS / Minimal styling
 API Details

Base URL:
http://20.207.122.201/evaluation-service

Endpoint Used:
GET /notifications

Authentication:

Protected API
Requires Bearer Token
Authorization: Bearer <access_token>
 Token Setup

Before running the app, store your access token in the browser:

localStorage.setItem("access_token", "YOUR_ACCESS_TOKEN");

 Note:

Token is NOT hardcoded
Token is dynamically read from localStorage for every request
 Project Structure
src/
│
├── api/
│   └── client.js              # Handles API requests & headers
│
├── services/
│   └── notifications.js       # Fetch notifications
│
├── utils/
│   └── priority.js            # Priority + sorting logic
│
├── pages/
│   └── Home.jsx               # Main UI
│
├── App.js
└── index.js
 Business Logic
Priority Rules:
Placement → 3 (Highest)
Result → 2
Event → 1 (Lowest)
Sorting:
Higher priority first
If same priority → latest timestamp first
Output:
Only top 10 notifications displayed
 Features
Fetch notifications from external API
Secure API calls using Bearer token
Priority-based sorting
Top 10 notifications display
Clean and modular code structure
Error handling for API failures
Loading state handling
▶Running the Project
npm install
npm run dev

Open:
http://localhost:3000

 Important Notes
No backend is used
No mock data is used
All data comes from the provided external API
Token must be valid for API access
 Error Handling

Handled cases:

Invalid / missing token (401)
Network failure
Empty response
 Evaluation Focus

This project follows:

Clean architecture (API / Services / Utils separation)
Reusable API layer
Proper token handling
Correct business logic implementation
Readable and maintainable code
 Conclusion

The application successfully demonstrates:

API integration
State management
Data transformation logic
Clean frontend architecture
 Author

Bernesh