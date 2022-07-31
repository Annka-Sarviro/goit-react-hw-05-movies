import { NavLink } from 'react-router-dom';

const DetailsBar = () => {
  return (
    <div>
      <li>
        <NavLink to={`cast`}>Cast</NavLink>
      </li>
      <li>
        <NavLink to={`reviews`}>Reviews</NavLink>
      </li>
    </div>
  );
};

export default DetailsBar;
