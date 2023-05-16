import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';
import { fetchDogByBreed } from 'example-2/api';
import { HTTP_ERROR_MSG } from '../constants';
import { DogDetails } from './DogDetails';
import { DogSkeleton } from './DogSkeleton';
import { ErrorMessage } from './ErrorMessage';

export const App = () => {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDog = async breedId => {
    try {
      setLoading(true);
      setError(null);

      const fetchedDog = await fetchDogByBreed(breedId);
      setDog(fetchedDog);
    } catch (error) {
      setError(HTTP_ERROR_MSG);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <BreedSelect onSelect={fetchDog} />
      {dog && !loading && <DogDetails dog={dog} />}
      {loading && <DogSkeleton />}
      {error && <div>{error}</div>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <GlobalStyle />
    </Layout>
  );
};
