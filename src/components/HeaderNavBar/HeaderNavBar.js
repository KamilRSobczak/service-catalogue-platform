import { Link } from "react-router";
import styles from "./headerNavBar.module.css";

const HeaderNavBar = () => {
  return (
    <header className={styles.headerContainer}>
      <Link className={styles.header} to={`/`}>
        Service Catalogue
      </Link>
    </header>
  );
};

export default HeaderNavBar;
