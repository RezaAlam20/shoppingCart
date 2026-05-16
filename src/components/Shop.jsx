import Item from "./Item";
import styles from "../Css/Shop.module.css";
import { useOutletContext } from "react-router-dom";
import svg from "../assets/loading.svg";

export default function Shop() {
  const { data, loading, error } = useOutletContext();
  if (loading) {
    return (
      <div className={styles.container}>
        <img src={svg} alt="loading" className={svg} />
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section className={styles.shop}>
      {data.map((item) => {
        const title = item.title;
        const split = title.split(" ");
        split.splice(5);
        const shortTitle = split.join(" ");
        const newItem = { ...item, title: shortTitle };
        return (
          <Item
            image={newItem.image}
            title={newItem.title}
            alt={newItem.title}
            price={newItem.price}
            key={newItem.title}
            id={newItem.id}
          ></Item>
        );
      })}
    </section>
  );
}
