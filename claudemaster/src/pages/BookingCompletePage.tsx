import { MainLayout } from '@/components/MainLayout';

export const BookingCompletePage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">예약 완료</h2>
          <p className="text-gray-600">QR 코드와 예약 정보가 표시됩니다.</p>
        </div>
      </div>
    </MainLayout>
  );
};
