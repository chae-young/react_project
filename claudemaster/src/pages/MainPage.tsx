import { MainLayout } from '@/components/MainLayout';

export const MainPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">인기 이벤트</h2>
          <p className="text-gray-600">이벤트 목록이 표시됩니다.</p>
        </div>
      </div>
    </MainLayout>
  );
};
