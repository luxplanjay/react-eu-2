import { useEffect, useState } from 'react';

export const SkipMount = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm === '') return;

    console.log(`Fetch data with ${searchTerm}`);
  }, [searchTerm]);

  return (
    <div>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          setSearchTerm(evt.target.elements.term.value);
        }}
      >
        <input type="text" name="term" />
        <button type="submit">Set search term</button>
      </form>
    </div>
  );
};
