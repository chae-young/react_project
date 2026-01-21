import { MainLayout } from '@/components/MainLayout';
import { useParams } from 'react-router-dom';

export const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">이벤트 상세</h2>
          <p className="text-gray-600">이벤트 ID: {id}</p>
        </div>
      </div>
    </MainLayout>
  );
};
