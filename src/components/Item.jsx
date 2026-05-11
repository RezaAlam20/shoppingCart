import { useOutletContext } from "react-router-dom";
import styles from "../Css/Item.module.css";

export default function Item({ url, alt, title, price, id }) {
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
      url: url,
      alt: alt,
      id: id,
    });
  }
  function handleRemove() {
    removeItem({
      title: title,
      price: price,
      url: url,
      alt: alt,
      id: id,
    });
  }

  if (amount == 0) {
    return (
      <div className={styles.item}>
        <img src={url} alt={alt} />
        <div>
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <button onClick={handleAdd}>Add to Cart</button>
      </div>
    );
  } else {
    return (
      <div className={styles.item}>
        <img src={url} alt={alt} />
        <div>
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <div>
          <button onClick={handleRemove}>-</button>
          <span>{amount}</span>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    );
  }
}
