import { NavLink } from 'react-router-dom';

const DetailsBar = () => {
  return (
    <nav>
      <li>
        <NavLink to={`cast`}>Cast</NavLink>
      </li>
      <li>
        <NavLink to={`reviews`}>Reviews</NavLink>
      </li>
    </nav>
  );
};

export default DetailsBar;
