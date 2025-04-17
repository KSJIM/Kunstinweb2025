// components/CategoryHeader.js
import styles from './CategoryHeader.module.css';

const CategoryHeader = ({ title, onClick, innerRef }) => {
  return (
    <div
      className={styles.categoryHeader}
      onClick={onClick}
      ref={innerRef}
    >
      {title}
    </div>
  );
};

export default CategoryHeader;
