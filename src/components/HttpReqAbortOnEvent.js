import { useRef } from 'react';
import axios from 'axios';

export const HttpReqAbortOnEvent = () => {
  const ctrlRef = useRef();

  const fetchData = async () => {
    // Если контроллер ЕСТЬ, отменить запрос
    if (ctrlRef.current) {
      ctrlRef.current.abort();
    }

    // Если контроллера НЕТ, создать его
    ctrlRef.current = new AbortController();

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url, {
        signal: ctrlRef.current.signal,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Make request</button>
      <button onClick={() => ctrlRef.current.abort()}>Cancel req</button>
    </div>
  );
};
