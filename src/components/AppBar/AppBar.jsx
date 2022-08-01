import Navigation from 'components/Navigation';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={styles.bar}>
      <Navigation />
    </div>
  );
};

export default AppBar;
