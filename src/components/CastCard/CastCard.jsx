import styles from './CastCard.module.css';

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
