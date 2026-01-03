# Inframax - Admin Dashboard Frontend

A modern, responsive admin dashboard built with React and Vite for managing business operations including inventory, sales, billing, and reporting.

## 🚀 Features

- **Dashboard Analytics** - Real-time business metrics and insights with interactive charts
- **Inventory Management** - Track and manage product inventory
- **Sales Management** - Process and monitor sales transactions
- **Billing System** - Generate and manage bills
- **Supply Chain** - Manage supply operations and vendors
- **Category Management** - Organize products by categories
- **Reports** - Comprehensive business reports and analytics
- **User Authentication** - Secure login with Google OAuth integration
- **Profile Management** - User profile and settings
- **Notifications** - Real-time notifications system
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.18
- **UI Components:** Material-UI (MUI) 7.1.0
- **State Management:** Redux Toolkit 2.8.2
- **Routing:** React Router DOM 7.6.1
- **Form Handling:** Formik 2.4.6 + Yup 1.6.1
- **Charts:** Chart.js 4.4.9 with React-Chartjs-2
- **HTTP Client:** Axios 1.9.0
- **Authentication:** React OAuth Google 0.13.4
- **Notifications:** React Hot Toast 2.6.0 + React Toastify 11.0.5
- **Icons:** React Icons 5.5.0 + MUI Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/akshhthakkar/H5-Frontend.git
cd H5-Frontend/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the frontend directory and add necessary configuration:

```env
VITE_API_URL=your_api_url
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## 🚀 Getting Started

### Development Mode

Run the development server:

```bash
npm run dev
```

## 🎨 Key Features Details

### Authentication

- Google OAuth 2.0 integration
- Email/Password authentication
- Password reset functionality
- Protected routes

### State Management

- Redux Toolkit for global state
- Custom hooks for local state management
- Persistent authentication state

### UI/UX

- Modern and clean interface
- Responsive design for all screen sizes
- Loading states and error handling
- Toast notifications for user feedback
- Drag and drop functionality

### Charts & Analytics

- Interactive charts using Chart.js
- Real-time data visualization
- Multiple chart types support

## 🌐 Deployment

The project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration.

To deploy:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

## 👥 Contributors

This project was developed by:

- **Aksh Thakkar** - [@akshhthakkar](https://github.com/akshhthakkar)
- **Yash Chauhan** - [@Yash08238](https://github.com/Yash08238)
- **Smit Chauhan** - [@Smit070](https://github.com/Smit070)

## 🏢 Company

**Inframax**VITE_API_URL=https://your-backend-url.com/api

````

### ⚠️ Pre-Deployment Checklist

| Item                  | Status | Notes                                            |
| --------------------- | ------ | ------------------------------------------------ |
| Environment Variables | ⚠️     | Replace all `localhost:3000` with production URL |
| API Base URL          | ⚠️     | Create `.env` for frontend with `VITE_API_URL`   |
| CORS Settings         | ⚠️     | Update `app.js` to allow production domain       |
| MongoDB               | ⚠️     | Use MongoDB Atlas for production                 |
| Cloudinary            | ✅     | Already cloud-based                              |
| Email                 | ✅     | Gmail works, consider SendGrid for production    |
| JWT Secret            | ⚠️     | Use strong, unique secret                        |
| HTTPS                 | ⚠️     | Required for production                          |

### Required Changes for Production

1. **Update API URLs** - Replace all `http://localhost:3000` in frontend:

```javascript
// Create frontend/.env
VITE_API_URL=https://your-api.railway.app

// Update axios calls to use:
axios.get(`${import.meta.env.VITE_API_URL}/products/getproducts`)
````

2. **Update CORS** - In `backend/app.js`:

   ```javascript
   app.use(
     cors({
       origin: ["https://your-frontend.vercel.app"],
       credentials: true,
     })
   );
   ```

3. **Use MongoDB Atlas** - Update `MONGO_URI` in production env

---

## 📊 Database Models

| Model            | Key Fields                                             |
| ---------------- | ------------------------------------------------------ |
| **User**         | email, password, businessName, stats                   |
| **Product**      | name, price, cp, inventory, categoryId, minThreshold   |
| **Category**     | name, type (SYSTEM/CUSTOM), owner                      |
| **Sales**        | customer, product, quantity, price, cp, amount, pdfUrl |
| **Notification** | type, message, isRead, productId                       |
| **AuditLog**     | action, entityType, before, after                      |
| **RestockLog**   | productId, quantity, supplier                          |

---

## 🔧 Scripts

```bash
# Run category seeder (auto-runs on startup)
node backend/seeds/categorySeeder.js

# Migrate existing products to new category system
node backend/migrations/migrateCategories.js

# Clean database (use with caution!)
node backend/scripts/cleanDB.js
```

---

## 📝 License

MIT License - Free for personal and commercial use.

---

## 👨‍💻 Developed By

**Inframax** - Powering Enterprise Solutions

## 📝 License

This project is private and proprietary to Inframax.

## 🤝 Contributing

This is a private project. For any changes or improvements, please contact the development team.

## 📧 Support

For support or questions, please contact the development team through appropriate channels.

---

**Built with ❤️ by the Inframax Team**
