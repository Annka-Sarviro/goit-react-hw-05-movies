import { NavLink } from 'react-router-dom';
import styles from './DetailsBar.module.css';
import PropTypes from 'prop-types';

const DetailsBar = ({ linkBack }) => {
  return (
    <div>
      <h3>Additional infotmation</h3>
      <ul className={styles.list}>
        <li className={styles.link}>
          <NavLink to={`cast`} state={{ from: linkBack }}>
            Cast
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to={`reviews`} state={{ from: linkBack }}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DetailsBar;

DetailsBar.propTypes = {
  linkBack: PropTypes.object,
};
