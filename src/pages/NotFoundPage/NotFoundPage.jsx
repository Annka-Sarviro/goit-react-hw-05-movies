import { NavLink } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Page not found</h1>
      <li>
        <NavLink to={'/'} className={styles.homeBtn}>
          Home
        </NavLink>
      </li>
    </div>
  );
};
