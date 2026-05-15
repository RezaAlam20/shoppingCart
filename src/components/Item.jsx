import { useOutletContext } from "react-router-dom";
import styles from "../Css/Item.module.css";

export default function Item({ image, alt, title, price, id, className = "" }) {
  const { addToCart, cart, removeItem } = useOutletContext();

  const item = cart.find((item) => item.id == id);
  let amount = 0;
  if (item) {
    amount = item.amount;
  }

  function handleAdd() {
    addToCart({
      title: title,
      price: price,
      image: image,
      alt: alt,
      id: id,
    });
  }
  function handleRemove() {
    removeItem({
      title: title,
      price: price,
      image: image,
      alt: alt,
      id: id,
    });
  }

  if (amount == 0) {
    return (
      <div className={`${styles.item} ${className}`}>
        <img src={image} alt={alt} />
        <div className={styles.info}>
          <span>{title}</span>
          <span className={styles.price}>{price} $</span>
        </div>
        <button onClick={handleAdd} className={styles.addToCart}>
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <div className={`${styles.item} ${className}`}>
        <img src={image} alt={alt} />
        <div className={styles.info}>
          <span>{title}</span>
          <span className={styles.price}>{price} $</span>
        </div>
        <div className={styles.amountWrapper}>
          <button onClick={handleRemove} className={styles.decrement}>
            -
          </button>
          <span>{amount}</span>
          <button onClick={handleAdd} className={styles.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}
