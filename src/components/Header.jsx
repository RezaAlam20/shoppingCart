import { Link } from "react-router-dom";
import styles from "../Css/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2>
          <Link to={"/"}>Fade Out</Link>
        </h2>
        <div className={styles.links}>
          <Link to={"/"} className={styles.link}>
            Home
          </Link>
          <Link to={"/Shop"} className={styles.link}>
            Shop
          </Link>
          <Link to={"/Cart"} className={styles.link}>
            Cart
          </Link>
        </div>
      </header>
    </>
  );
}
