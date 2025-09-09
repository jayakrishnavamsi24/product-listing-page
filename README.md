# Product Listing Page - React + Firebase + Tailwind

A modern, responsive product listing page built with React, TypeScript, Firebase Authentication, and Tailwind CSS. Features real-time product data, client-side filtering, sorting, and user authentication.

## 🚀 Features

- **React 18 + TypeScript** - Modern React with full type safety
- **Firebase Authentication** - Email/password + Google sign-in
- **Real-time Product Data** - FakeStore API with fallback data
- **Advanced Filtering** - Category, price range, rating, and search
- **Client-side Sorting** - Sort by price, rating, and relevance
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **Product Quick View** - Modal for product details
- **Wishlist Management** - Add/remove products with local storage
- **Persistent Filters** - Filter state saved in localStorage
- **Loading States** - Skeleton loaders and error boundaries

## 📋 Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- Firebase project with Auth enabled

## 🛠️ Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password and Google providers
3. Copy your Firebase config and add to environment variables

### 3. Environment Variables

Create a `.env` file in the root directory with your Firebase configuration:

```env
# Firebase Configuration (replace with your actual values)
VITE_FIREBASE_API_KEY=your-firebase-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 4. Start Development Server

```bash
npm run start
```

Visit `http://localhost:4028` to see the application.

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project directory
3. Add environment variables in Vercel dashboard:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

### Environment Variables for Vercel

In your Vercel project settings, add these environment variables:

| Variable                            | Value                          | Description                  |
| ----------------------------------- | ------------------------------ | ---------------------------- |
| `VITE_FIREBASE_API_KEY`             | `your-api-key`                 | Firebase API key             |
| `VITE_FIREBASE_AUTH_DOMAIN`         | `your-project.firebaseapp.com` | Firebase Auth domain         |
| `VITE_FIREBASE_PROJECT_ID`          | `your-project-id`              | Firebase Project ID          |
| `VITE_FIREBASE_STORAGE_BUCKET`      | `your-project.appspot.com`     | Firebase Storage bucket      |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `your-sender-id`               | Firebase Messaging sender ID |
| `VITE_FIREBASE_APP_ID`              | `your-app-id`                  | Firebase App ID              |

## 📁 Project Structure

```
├── public/
│   ├── products-fallback.json    # Fallback product data
│   └── images/                   # Static images
├── src/
│   ├── components/
│   │   ├── Auth/                 # Authentication components
│   │   │   ├── AuthModal.tsx
│   │   │   ├── SignIn.tsx
│   │   │   └── SignUp.tsx
│   │   ├── common/               # Shared components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                   # UI components
│   │   ├── FiltersPanel.tsx      # Product filtering
│   │   ├── ProductCard.tsx       # Individual product card
│   │   ├── ProductGrid.tsx       # Product grid layout
│   │   ├── ProductModal.tsx      # Product quick view
│   │   └── SortBar.tsx          # Sorting controls
│   ├── context/
│   │   └── AuthContext.tsx      # Firebase auth context
│   ├── hooks/
│   │   └── useProducts.tsx      # Product data management
│   ├── lib/
│   │   └── firebase.ts          # Firebase configuration
│   ├── pages/
│   │   └── ProductDiscovery/    # Main product page
│   ├── utils/
│   │   └── localStorage.ts      # Local storage utilities
│   └── styles/                  # Global styles
├── .env                         # Environment variables
└── README.md                    # This file
```

## 🎯 Key Components

### Authentication

- **AuthContext**: Manages user state and Firebase auth methods
- **SignIn/SignUp**: Complete forms with validation and error handling
- **AuthModal**: Modal wrapper for auth components

### Product Management

- **useProducts**: Custom hook for product data, filtering, and sorting
- **ProductCard**: Individual product display with wishlist functionality
- **ProductGrid**: Responsive grid with loading states
- **FiltersPanel**: Advanced filtering with persistent state

### User Experience

- **Responsive Design**: Mobile-first with Tailwind breakpoints
- **Loading States**: Skeleton loaders during data fetch
- **Error Handling**: Graceful fallbacks and error messages
- **Accessibility**: ARIA labels, keyboard navigation, focus management

## 🔧 Available Scripts

- `npm run start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript checks

## 🔐 Security Notes

- Environment variables are used for Firebase config
- No sensitive data is committed to repository
- Client-side filtering and sorting (no backend required)
- Secure authentication with Firebase

## 🎨 Customization

### Tailwind Theme

Customize colors, spacing, and breakpoints in `tailwind.config.js`

### Product Data

- API: Uses FakeStore API for product data
- Fallback: Local JSON file in `public/products-fallback.json`
- Easily replaceable with any product API

### Filters

Add new filter types by extending the `ProductFilters` interface in `useProducts.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Performance

- Lazy loading images
- Component code splitting
- Optimized bundle size with Vite
- Efficient re-rendering with proper React patterns

## 🙏 Acknowledgments

- **FakeStore API** for product data
- **Firebase** for authentication
- **Tailwind CSS** for styling
- **Vite** for build tooling

Built with ❤️ using modern web technologies
