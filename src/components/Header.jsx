import { Link } from "react-router-dom";
import styles from "../Css/Header.module.css";

export default function Header({ calcSum }) {
  let showSum = false;
  if (calcSum() == 0) {
    showSum = false;
  } else {
    showSum = true;
  }
  return (
    <>
      <header className={styles.header}>
        <h2>
          <Link to={"/"} className={styles.link}>
            Fade Out
          </Link>
        </h2>
        <div className={styles.links}>
          <Link to={"/"} className={styles.link}>
            Home
          </Link>
          <Link to={"/Shop"} className={styles.link}>
            Shop
          </Link>
          <Link to={"/Cart"} className={styles.link}>
            Cart {showSum ? <div className={styles.sum}>{calcSum()}</div> : ""}
          </Link>
        </div>
      </header>
    </>
  );
}
