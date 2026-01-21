import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { EventDetailPage } from '@/pages/EventDetailPage';
import { SeatSelectionPage } from '@/pages/SeatSelectionPage';
import { BookingConfirmationPage } from '@/pages/BookingConfirmationPage';
import { BookingCompletePage } from '@/pages/BookingCompletePage';
import { MyBookingsPage } from '@/pages/MyBookingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/seat-selection" element={<SeatSelectionPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        <Route path="/booking-complete" element={<BookingCompletePage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
