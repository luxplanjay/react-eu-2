import { fetchBreeds } from 'cat-api';
import { CatList } from 'components/CatList';
import { useEffect, useState } from 'react';

export default function Cats() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getBreeds() {
      try {
        setLoading(true);
        setError(false);
        const fetchedBreeds = await fetchBreeds(controller.signal);
        setBreeds(fetchedBreeds);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getBreeds();

    return () => controller.abort();
  }, []);

  return (
    <div>
      {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
      {loading && <b>Loading data, please wait...</b>}
      {breeds.length > 0 && <CatList cats={breeds} />}
    </div>
  );
}
