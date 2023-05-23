import { fetchCatByBreed } from 'cat-api';
import { CatInfo } from 'components/CatInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CatDetails() {
  const { breedId } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCat() {
      try {
        setLoading(true);
        const fetchedCat = await fetchCatByBreed(breedId);
        setCat(fetchedCat);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    getCat();
  }, [breedId]);

  return (
    <div>
      {loading && <p>Loading cat data, please wait...</p>}
      {cat && !loading && <CatInfo cat={cat} />}
    </div>
  );
}
