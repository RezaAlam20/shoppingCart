import { useOutletContext } from "react-router-dom";
import styles from "../Css/Cart.module.css";
import Item from "./Item";
import svg from "../assets/loading.svg";
export default function Cart() {
  const { cart, loading } = useOutletContext();
  if (loading) {
    return (
      <div className={styles.container}>
        <img src={svg} alt="loading" className={svg} />
      </div>
    );
  }

  if (cart.length == 0) {
    return (
      <div className={styles.emptyMessage}>LOOKS LIKE YOUR CART IS EMPTY</div>
    );
  }

  return (
    <section className={styles.Cart}>
      {cart.map((item) => {
        console.log(item);

        return (
          <Item
            image={item.image}
            title={item.title}
            alt={item.title}
            price={item.price}
            key={item.title}
            id={item.id}
            className={styles.cartItem}
          ></Item>
        );
      })}
    </section>
  );
}
