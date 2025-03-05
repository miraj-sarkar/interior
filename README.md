# Yoga Wellness Instructor Web App

A modern, responsive web application for a Yoga and Wellness Instructor built with React.js, Tailwind CSS, and Firebase.

## Features

- 🧘‍♀️ Class booking system
- 👤 User authentication
- 📱 Responsive design
- 🎨 Modern UI with animations
- 📝 Blog section
- 📞 Contact form
- ⭐ Testimonials
- 🔒 Protected routes
- 🔄 Real-time updates

## Tech Stack

- React.js
- Tailwind CSS
- Firebase (Authentication & Firestore)
- Framer Motion
- React Router
- React Icons
- React Calendar

## Prerequisites

- Node.js (v14 or higher)
- Yarn (v1.22.0 or higher)
- Firebase account
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/yoga-wellness-instructor-app.git
cd yoga-wellness-instructor-app
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Set Up Firebase

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password and Google sign-in methods
3. Create a Firestore database
4. Get your Firebase configuration from Project Settings
5. Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 4. Start Development Server

```bash
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `yarn start` - Runs the app in development mode
- `yarn build` - Builds the app for production
- `yarn test` - Launches the test runner
- `yarn eject` - Ejects from Create React App

## Project Structure

```
src/
├── components/
│   ├── auth/         # Authentication components
│   ├── layout/       # Layout components (Navbar, Footer)
│   └── ui/           # Reusable UI components
├── contexts/         # React contexts
├── firebase/         # Firebase configuration
├── pages/           # Page components
├── styles/          # Global styles
└── utils/           # Utility functions
```

## Deployment

### Option 1: Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
yarn global add firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init
```

4. Build the project:
```bash
yarn build
```

5. Deploy to Firebase:
```bash
firebase deploy
```

### Option 2: Deploy to Vercel

1. Install Vercel CLI:
```bash
yarn global add vercel
```

2. Deploy:
```bash
vercel
```

### Option 3: Deploy to Netlify

1. Install Netlify CLI:
```bash
yarn global add netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@yogawell.com or join our Slack channel.

## Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
