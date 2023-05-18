import { useRef } from 'react';
import axios from 'axios';

export const HttpReqAbortOnEvent = () => {
  const fetchData = async () => {
    // Если контроллер ЕСТЬ, отменить запрос

    // Если контроллера НЕТ, создать его

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Make request</button>
      {/* <button>Cancel req</button> */}
    </div>
  );
};
