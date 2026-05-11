import { Link } from "react-router-dom";
import styles from "../Css/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2>Fade Out</h2>

        <Link to={"/Shop"}>Shop</Link>

        <Link to={"/Cart"}>Cart</Link>
      </header>
    </>
  );
}
