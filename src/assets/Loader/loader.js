import styles from "./loader.module.css";

export const Loader = ({ message }) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <p className={styles.laderMsg}>{message ? message : "Loading..."}</p>
        <div className={styles.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
