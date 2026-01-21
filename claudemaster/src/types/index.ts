// 이벤트 관련 타입 정의
export type EventCategory = 'movie' | 'performance' | 'all';

export interface Event {
  id: string;
  title: string;
  category: EventCategory;
  posterUrl: string;
  description: string;
  venue: string;
  sessions: Session[];
}

export interface Session {
  id: string;
  eventId: string;
  dateTime: Date;
  availableSeats: string[];
  price: number;
}

// 좌석 관련 타입 정의
export enum SeatStatus {
  Available = 'available',
  Selected = 'selected',
  Unavailable = 'unavailable',
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  price: number;
  status: SeatStatus;
}

// 예약 관련 타입 정의
export interface UserInfo {
  name: string;
  phone: string;
  email: string;
}

export interface Booking {
  id: string;
  sessionId: string;
  seats: Seat[];
  totalPrice: number;
  userInfo: UserInfo;
  qrCode: string;
  bookingDate: Date;
}

// 전역 상태 관련 타입 정의
export interface BookingContextType {
  currentEvent: Event | null;
  currentSession: Session | null;
  selectedSeats: Seat[];
  userInfo: UserInfo | null;
  totalPrice: number;
  setCurrentEvent: (event: Event | null) => void;
  setCurrentSession: (session: Session | null) => void;
  setSelectedSeats: (seats: Seat[]) => void;
  setUserInfo: (info: UserInfo | null) => void;
  updateTotalPrice: () => void;
  clearBooking: () => void;
}
