# Installation Instructions

## Install axios in frontend

Run this command in the frontend directory:

```bash
cd frontend
npm install axios
```

## Start Backend Server

Run this command in the backend directory:

```bash
cd backend
npm start
```

## Start Frontend Server

Run this command in the frontend directory:

```bash
cd frontend
npm run dev
```

## Access Admin Contact Dashboard

Add this route to your App.jsx:

```jsx
import AdminContactDashboard from "./components/admin/AdminContactDashboard";

// Add this route inside your admin routes section:
<Route path="/admin/contacts" element={
  <ProtectedRoute>
    <AdminContactDashboard />
  </ProtectedRoute>
} />
```

Then access: http://localhost:5173/admin/contacts
