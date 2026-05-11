import Item from "./Item";
import styles from "../Css/Shop.module.css";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const { data, loading, error } = useOutletContext();
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section className={styles.shop}>
      {data.map((item) => {
        return (
          <Item
            url={item.image}
            title={item.title}
            alt={item.title}
            price={item.price}
            key={item.title}
            id={item.id}
          ></Item>
        );
      })}
    </section>
  );
}
