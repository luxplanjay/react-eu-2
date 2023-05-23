import { Link } from 'react-router-dom';

export const CatList = ({ cats }) => {
  return (
    <ul>
      {cats.map(cat => {
        return (
          <li key={cat.id}>
            <Link to={`${cat.id}`}>{cat.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
