import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useFetchById } from '../api/hooks';
import { useFetchBatch } from '../api/hooks';
import { DetailsTemplate } from '../components/templates';
import type { Film, Person } from '../api/types';

export const DetailsPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const { fetchById, getLoading, getSelected, getError } = useFetchById();
  const { fetchBatch, data } = useFetchBatch();
  const [isLoading, setIsLoading] = useState(false);

  const resourceType = type as 'films' | 'people';
  const selectedData = type ? getSelected(resourceType) : null;
  const error = type ? getError(resourceType) : null;

  useEffect(() => {
    if (selectedData?.result) {
      const result = selectedData.result;
      let relatedUrls: string[] = [];
      
      if (resourceType === 'films') {
        relatedUrls = (result as Film).characters || [];
      } else {
        relatedUrls = (result as Person).films || [];
      }
      
      const relatedIds = relatedUrls
        .map((url: string) => {
          const match = url.match(/\/(\d+)\/?$/);
          return match ? parseInt(match[1], 10) : null;
        })
        .filter((id: number | null): id is number => id !== null);
      
      const relatedResourceType = resourceType === 'films' ? 'people' : 'films';
      fetchBatch(relatedIds, relatedResourceType);
    }
  }, [selectedData?.result, resourceType, fetchBatch])

  useEffect(() => {
    if (type && id) {
      fetchById(type as 'films' | 'people', Number(id))
    }
  }, [type, id, fetchById])

  useEffect(() => {
    if (type) {
      setIsLoading(getLoading(type as 'films' | 'people'))
    }
  }, [type, getLoading])

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])


  const handleBackToSearch = () => {
    navigate('/');
  }

  return (
    <DetailsTemplate data={selectedData?.result || null} relatedData={data} isLoading={isLoading} onBackToSearch={handleBackToSearch} resourceType={resourceType} />
  )
}
