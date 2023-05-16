import { useState, useEffect } from 'react';
import { fetchBreeds } from 'example-2/api';
import { HTTP_ERROR_MSG } from '../constants';
import Select from 'react-select';
import { ErrorMessage } from './ErrorMessage';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBreeds() {
      try {
        setLoading(true);
        setError(null);
        const fetchedBreeds = await fetchBreeds();
        setBreeds(fetchedBreeds);
      } catch (error) {
        setError(HTTP_ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getBreeds();
  }, []);

  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name,
  }));

  return (
    <div>
      <Select
        options={options}
        isLoading={loading}
        onChange={option => onSelect(option.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
