# Aether Smile Studio - Dental Clinic Website

A modern, responsive dental clinic website built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multi-Page Navigation**: Home, Treatments, Our Team, Reviews, and Contact pages
- **Booking System**: Interactive booking modal for appointment scheduling
- **Treatment Information**: Detailed information about dental services
- **Team Profiles**: Meet our expert dental professionals
- **Patient Reviews**: Verified patient testimonials and ratings
- **Contact Form**: Easy-to-use contact form with validation

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Comprehensive icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dental-clinic-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
dental-clinic-website/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── BookingModal.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Treatments.jsx
│   │   ├── OurTeam.jsx
│   │   ├── Reviews.jsx
│   │   └── Contact.jsx
│   ├── data/             # Static data
│   │   ├── treatments.js
│   │   ├── team.js
│   │   └── reviews.js
│   ├── utils/            # Utility functions
│   │   └── animations.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features Details

### Booking Modal
- Frontend-only booking system
- Form validation
- Confirmation message display
- No backend integration required

### Security Features
- Input sanitization
- XSS protection through React
- No sensitive data exposure
- Client-side validation

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects
- Loading animations

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#4fd1c5',
  // Add more custom colors
}
```

### Content
Update data files in `src/data/` to modify:
- Treatments information
- Team member profiles
- Patient reviews

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Credits

- Images from Unsplash
- Icons from React Icons (Heroicons)
- Fonts from Google Fonts (Space Grotesk)
