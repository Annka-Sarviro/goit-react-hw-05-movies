import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
    </div>
  );
};
