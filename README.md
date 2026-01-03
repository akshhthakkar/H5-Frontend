# Inframax Admin Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38bdf8?logo=tailwindcss)
![Material-UI](https://img.shields.io/badge/MUI-7.1.0-007FFF?logo=mui)
![Redux](https://img.shields.io/badge/Redux-2.8.2-764ABC?logo=redux)
![License](https://img.shields.io/badge/License-Proprietary-red)

### 🚀 [Live Demo](https://h5-erp.vercel.app/)

</div>

A modern, responsive admin dashboard built with React and Vite for managing inventory, sales, billing, supply chain, and business analytics.

**Currently deployed at:** [https://h5-erp.vercel.app/](https://h5-erp.vercel.app/)

## ✨ Features

### 📊 Dashboard & Analytics

- **Real-time Metrics** - Live business KPIs and performance indicators
- **Interactive Charts** - Dynamic visualizations using Chart.js (Line, Bar, Pie, Doughnut)
- **Sales Trends** - Track revenue and profit trends over time
- **Top Products** - Identify best-performing inventory items

### 📦 Inventory Management

- **Product Catalog** - Complete product database with images (Cloudinary integration)
- **Stock Tracking** - Real-time inventory levels and alerts
- **Category Organization** - System and custom categories for better organization
- **Low Stock Alerts** - Automatic notifications when inventory runs low
- **Bulk Operations** - Import/export products, batch updates

### 💰 Sales & Billing

- **Quick Sale Processing** - Fast checkout with barcode scanning
- **Invoice Generation** - Professional PDF bills with company branding
- **Payment Tracking** - Multiple payment methods support
- **Customer Management** - Track customer purchase history
- **Profit Calculation** - Automatic profit tracking (selling price - cost price)

### 🚚 Supply Chain

- **Supplier Management** - Maintain supplier database
- **Purchase Orders** - Create and track orders
- **Stock Replenishment** - Smart restock suggestions based on sales forecast
- **Restock History** - Complete audit trail of all inventory additions

### 📈 Reports & Analytics

- **Monthly Sales Reports** - Detailed breakdowns by period
- **Dead Stock Analysis** - Identify slow-moving inventory
- **Profit Summary** - Revenue vs. cost analysis
- **Export Options** - Download reports in PDF/Excel format

### 🔐 Authentication & Security

- **Google OAuth 2.0** - One-click social login
- **Email/Password Auth** - Traditional authentication
- **Password Reset** - Secure password recovery flow
- **JWT Tokens** - Secure session management
- **Protected Routes** - Role-based access control

### 🎨 User Experience

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark/Light Mode** - User preference support (coming soon)
- **Toast Notifications** - Real-time feedback for actions
- **Drag & Drop** - Intuitive file uploads and reordering
- **Form Validation** - Client-side validation with Formik + Yup
- **Loading States** - Skeleton loaders and progress indicators
- **Error Handling** - Graceful error messages and recovery

### 🔔 Notifications

- **Real-time Alerts** - Low stock, new orders, system updates
- **Notification Center** - Centralized notification management
- **Mark as Read** - Track notification status
- **Priority Levels** - Categorize by urgency

## 🛠 Tech Stack

### Core

- **React** 19.1.0 - Latest React with improved hooks and concurrent features
- **Vite** 6.3.5 - Lightning-fast HMR and optimized builds
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling & UI

- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **Material-UI (MUI)** 7.1.0 - Enterprise-grade React components
- **PostCSS** 8.5.6 - CSS transformations and autoprefixing
- **React Icons** 5.5.0 - Popular icon packs (FontAwesome, Material, etc.)
- **Bootstrap** 5.3.6 - Additional UI utilities

### State Management

- **Redux Toolkit** 2.8.2 - Simplified Redux with best practices
- **React Redux** 9.2.0 - Official React bindings for Redux
- **Persistent State** - Local storage integration

### Forms & Validation

- **Formik** 2.4.6 - Form state management
- **Yup** 1.6.1 - Schema validation
- **Real-time Validation** - Instant feedback on user input

### Data Visualization

- **Chart.js** 4.4.9 - Powerful charting library
- **React-Chartjs-2** 5.3.1 - React wrapper for Chart.js
- **Custom Dashboards** - Drag-and-drop chart configuration

### Routing & Navigation

- **React Router DOM** 7.6.1 - Client-side routing
- **Protected Routes** - Authentication-based navigation
- **Dynamic Breadcrumbs** - Automatic route-based breadcrumbs

### API & Authentication

- **Axios** 1.9.0 - Promise-based HTTP client
- **React OAuth Google** 0.13.4 - Google sign-in integration
- **JWT** - Secure token-based authentication
- **Interceptors** - Request/response middleware

### Notifications & Feedback

- **React Hot Toast** 2.6.0 - Beautiful toast notifications
- **React Toastify** 11.0.5 - Additional notification options
- **Sound Alerts** - Audio feedback for important events (optional)

### Utilities

- **React Draggable** 4.4.6 - Drag and drop functionality
- **Date Formatting** - Smart date/time displays
- **Number Formatting** - Currency and number utilities

### Development Tools

- **ESLint** 9.27.0 - Code linting and quality checks
- **Autoprefixer** 10.4.23 - Automatic vendor prefixes
- **Hot Module Replacement** - Instant updates during development

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/akshhthakkar/H5-Frontend.git
cd H5-Frontend/frontend

# Install dependencies
npm install

# Set up environment variables
# Create a .env file with:
# VITE_API_URL=your_api_url
# VITE_GOOGLE_CLIENT_ID=your_google_client_id

# Start development server
npm run dev
```

## 🚀 Available Scripts

- `npm run dev` - Start development server on http://localhost:5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx      # Custom button component
│   │   ├── Card.jsx        # Card containers
│   │   ├── Header.jsx      # Application header
│   │   ├── Sidebar.jsx     # Navigation sidebar
│   │   ├── Modal.jsx       # Modal dialogs
│   │   ├── Input.jsx       # Form inputs
│   │   └── CameraCapture.jsx # Camera integration
│   ├── pages/              # Page components
│   │   ├── Dashboard.jsx   # Main dashboard with analytics
│   │   ├── Inventory.jsx   # Product management
│   │   ├── Sales.jsx       # Sales transactions
│   │   ├── Bills.jsx       # Invoice management
│   │   ├── Supply.jsx      # Supply chain & restocking
│   │   ├── Categories.jsx  # Category management
│   │   ├── Reports.jsx     # Business reports
│   │   ├── Profile.jsx     # User profile settings
│   │   ├── Notifications.jsx # Notification center
│   │   ├── SignIn.jsx      # Login page
│   │   ├── SignUp.jsx      # Registration page
│   │   ├── ForgotPassword.jsx # Password reset request
│   │   ├── ResetPassword.jsx # Password reset form
│   │   └── AuthCallback.jsx # OAuth callback handler
│   ├── layouts/            # Layout wrappers
│   │   ├── MainLayout.jsx  # Authenticated app layout
│   │   └── AuthLayout.jsx  # Auth pages layout
│   ├── redux/              # State management
│   │   ├── store.jsx       # Redux store configuration
│   │   └── UsersSlice.jsx  # User state slice
│   ├── hooks/              # Custom React hooks
│   │   └── useAuth.jsx     # Authentication hook
│   ├── App.jsx             # Main app component & routing
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles & Tailwind
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── vercel.json             # Vercel deployment configuration
```

## 🎯 Key Highlights

- ⚡ **Blazing Fast** - Vite's instant HMR for rapid development
- 🎨 **Modern UI** - Clean, professional Material Design interface
- 📱 **Mobile First** - Fully responsive on all devices
- 🔒 **Secure** - Industry-standard authentication and authorization
- 📊 **Data-Driven** - Real-time analytics and insights
- 🧩 **Modular** - Component-based architecture for easy maintenance
- 🚀 **Production Ready** - Optimized builds with code splitting
- ♿ **Accessible** - WCAG compliance for inclusive design
- 🌐 **Cloud Ready** - Configured for Vercel deployment

## 🌐 Deployment

Configured for Vercel deployment. Deploy by:

1. Push to GitHub
2. Import project in Vercel dashboard
3. Add environment variables:
   ```
   VITE_API_URL=https://your-backend-api.com
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   ```
4. Deploy automatically on every push

### Other Platforms

Compatible with Netlify, Render, Railway, and other static hosting services.

**Build Configuration:**

- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: 18.x or higher

## 👥 Contributors

- **Aksh Thakkar** - [@akshhthakkar](https://github.com/akshhthakkar)
- **Yash Chauhan** - [@Yash08238](https://github.com/Yash08238)
- **Smit Chauhan** - [@Smit070](https://github.com/Smit070)

---

**Built with ❤️ by Inframax Team**
