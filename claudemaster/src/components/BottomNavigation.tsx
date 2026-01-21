import { Link, useLocation } from 'react-router-dom';

export const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            isActive('/') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <span className="text-xl">🏠</span>
          <span className="text-xs mt-1">홈</span>
        </Link>

        <Link
          to="/my-bookings"
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            isActive('/my-bookings') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <span className="text-xl">📋</span>
          <span className="text-xs mt-1">예약내역</span>
        </Link>
      </div>
    </nav>
  );
};
