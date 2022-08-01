import styles from './CastCard.module.css';
import PropTypes from 'prop-types';

const CastCard = ({ cast, castImgUrl }) => {
  return (
    <li key={cast.id} className={styles.card}>
      <p className={styles.name}> {cast.name}</p>
      {cast.profile_path && (
        <img
          src={castImgUrl}
          alt={cast.name}
          width="40"
          className={styles.img}
        />
      )}
    </li>
  );
};

export default CastCard;

CastCard.propTypes = {
  castImgUrl: PropTypes.string,
  cast: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    profile_path: PropTypes.string,
  }),
};
