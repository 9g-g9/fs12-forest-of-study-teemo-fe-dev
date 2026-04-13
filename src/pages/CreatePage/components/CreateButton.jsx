import styles from '../css/CreateButton.module.css';

const CreateButton = ({ onClick }) => {
  return (
    <button type="submit" className={styles.btn} onClick={onClick}>
      만들기
    </button>
  );
};

export default CreateButton;
