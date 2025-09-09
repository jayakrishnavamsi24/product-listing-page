# StyleCraft - Product Listing Page

This project is a comprehensive e-commerce product listing page that I built to showcase modern web development practices. The application combines a clean, intuitive user interface with robust functionality for browsing and filtering products.

## What's Inside

The application includes several key features that make it a solid foundation for any e-commerce project:

**Authentication System**: Users can create accounts and sign in using either email/password or their Google account. I've integrated Firebase Authentication to handle all the security aspects.

**Product Management**: The app pulls product data from the FakeStore API, with a local fallback in case the API is unavailable. Products can be filtered by category, price range, and other criteria.

**User Experience**: I've focused on making the interface responsive and accessible. The design works well on mobile devices, tablets, and desktop computers.

**Data Persistence**: User preferences like filter selections and wishlist items are saved locally, so they persist between sessions.

## Getting Started

Before you can run this project, you'll need a few things set up on your machine:

- Node.js version 16 or newer
- A package manager (npm comes with Node.js)
- A Firebase project with Authentication enabled

## Setting Things Up

First, clone this repository and install the required packages:

```bash
npm install
```

Next, you'll need to set up Firebase. Head over to the [Firebase Console](https://console.firebase.google.com/) and create a new project. Make sure to enable Authentication and set up both Email/Password and Google sign-in methods.

Once your Firebase project is ready, create a `.env` file in the project root and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your-firebase-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

After that's done, you can start the development server:

```bash
npm run start
```

The application will be available at `http://localhost:4028`.

## Deploying to Production

When you're ready to deploy, you can build the project for production:

```bash
npm run build
```

I've set this project up to work well with Vercel. If you want to deploy there:

1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Import your repository as a new project
4. Add your environment variables in the Vercel dashboard

Make sure to add all the Firebase environment variables in your Vercel project settings. The build process will automatically detect that this is a Vite project and configure everything correctly.

## How It's Organized

The project follows a standard React application structure:

```
├── public/
│   ├── products-fallback.json    # Backup product data
│   └── images/                   # Static assets
├── src/
│   ├── components/
│   │   ├── Auth/                 # Login and signup components
│   │   ├── common/               # Header, footer, etc.
│   │   ├── ui/                   # Reusable UI elements
│   │   └── [other components]    # Product cards, filters, etc.
│   ├── context/
│   │   └── AuthContext.tsx      # User authentication state
│   ├── hooks/
│   │   └── useProducts.tsx      # Product data and filtering logic
│   ├── lib/
│   │   └── firebase.ts          # Firebase setup
│   ├── pages/
│   │   └── ProductDiscovery/    # Main product listing page
│   └── utils/                   # Helper functions
```

## Technical Details

I built this application using React 18 with TypeScript for better code reliability. The authentication system uses Firebase, which handles all the security aspects like password hashing and OAuth integration.

For styling, I chose Tailwind CSS because it makes the design system consistent and the responsive behavior predictable. The product data comes from the FakeStore API, but I've included a local fallback file in case the API is down.

The filtering and sorting happens entirely on the client side, which makes the interface feel snappy. User preferences like filter selections get saved to localStorage so they persist between visits.

## Available Commands

```bash
npm run start        # Start the development server
npm run build        # Create a production build
npm run preview      # Preview the production build locally
npm run type-check   # Check for TypeScript errors
```

## A Few Notes About Security

All Firebase configuration is handled through environment variables, so no sensitive information gets committed to the repository. The authentication flows use Firebase's built-in security measures, and the application doesn't store any sensitive user data locally.

## Customizing the Application

If you want to adapt this for your own use, here are the main areas you might want to modify:

**Product Data**: Replace the FakeStore API calls in `useProducts.tsx` with your own product API. The component expects products to have basic fields like name, price, image, and category.

**Styling**: The Tailwind configuration is in `tailwind.config.js`. You can adjust colors, spacing, and breakpoints there to match your brand.

**Filters**: To add new filter types, extend the filtering logic in `useProducts.tsx` and add the corresponding UI elements in `FiltersPanel.tsx`.

## Browser Compatibility

This application works in all modern browsers including Chrome, Firefox, Safari, and Edge. I've tested it on both desktop and mobile devices.

## Credits

This project uses several excellent open-source tools and services:

- React and TypeScript for the core application
- Firebase for user authentication
- Tailwind CSS for styling
- Vite for fast development and building
- FakeStore API for sample product data

The project structure and patterns are based on current React best practices and should serve as a good foundation for larger e-commerce applications.
