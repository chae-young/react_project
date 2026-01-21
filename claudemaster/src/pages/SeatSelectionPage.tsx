import { MainLayout } from '@/components/MainLayout';

export const SeatSelectionPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">좌석 선택</h2>
          <p className="text-gray-600">좌석 배치도가 표시됩니다.</p>
        </div>
      </div>
    </MainLayout>
  );
};
