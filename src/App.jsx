import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import OurTeam from './pages/OurTeam';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar onBookingClick={openBooking} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBookingClick={openBooking} />} />
            <Route path="/treatments" element={<Treatments onBookingClick={openBooking} />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </Router>
  );
}

export default App;
