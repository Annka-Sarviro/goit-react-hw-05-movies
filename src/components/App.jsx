import createAsyncPages from 'helpers/createAsyncPages';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Suspense } from 'react';

const HomeAsync = createAsyncPages('Home');
const MoviesAsync = createAsyncPages('Movies');
const MovieDetailsAsync = createAsyncPages('MovieDetails');
const CastAsync = createAsyncPages('Cast');
const ReviewsAsync = createAsyncPages('Reviews');
const NotFoundPageAsync = createAsyncPages('NotFoundPage');

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeAsync />} />
          <Route path="movies" element={<MoviesAsync />} />
          <Route path="movies/:movieId" element={<MovieDetailsAsync />}>
            <Route path="cast" element={<CastAsync />} />
            <Route path="reviews" element={<ReviewsAsync />} />
          </Route>
          <Route path="*" element={<NotFoundPageAsync />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
