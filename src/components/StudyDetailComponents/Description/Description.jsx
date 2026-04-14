import styles from './Description.module.css';
import TotalPoint from '../../TotalPoint/TotalPoint';

const Description = ({ descTitle, descContent, descType = 'text' }) => {
  return (
    <div className={styles.descContainer}>
      <p className={styles.descTitle}>{descTitle}</p>
      {descType === 'text' ? (
        <p className={styles.descContent}>{descContent}</p>
      ) : (
        <TotalPoint size={'m'} />
      )}
    </div>
  );
};

export default Description;
