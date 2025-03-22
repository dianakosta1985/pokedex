import styles from "./styles.module.scss";
export const SkeletonLoader = () => (
  <div className={styles.skeletonGrid}>
    {Array.from({ length: 12 }).map((_, index) => (
      <div key={index} className={styles.skeletonCard}></div>
    ))}
  </div>
);

export default SkeletonLoader;
