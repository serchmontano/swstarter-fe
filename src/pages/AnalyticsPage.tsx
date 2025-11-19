import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useStatistics } from '../api/hooks';
import { AnalyticsTemplate } from '../components/templates';

export const AnalyticsPage = () => {
  const { data, loading, error } = useStatistics();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <AnalyticsTemplate 
      data={data?.data || null} 
      isLoading={loading} 
    />
  );
}
