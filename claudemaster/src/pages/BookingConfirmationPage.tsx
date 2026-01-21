import { MainLayout } from '@/components/MainLayout';

export const BookingConfirmationPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">예약 확인</h2>
          <p className="text-gray-600">예약 정보를 확인하고 사용자 정보를 입력하세요.</p>
        </div>
      </div>
    </MainLayout>
  );
};
