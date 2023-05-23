import CatDetails from 'pages/CatDetails';
import Cats from 'pages/Cats';
import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cats" element={<Cats />} />
          <Route path="cats/:breedId" element={<CatDetails />} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
};
