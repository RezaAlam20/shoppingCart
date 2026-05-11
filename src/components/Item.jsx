import { useOutletContext } from "react-router-dom";
import styles from "../Css/Item.module.css";
import { useState } from "react";

export default function Item({ url, alt, title, price }) {
  const { addToCart, cart } = useOutletContext();
  const [UUID] = useState(crypto.randomUUID());

  const item = cart.find((item) => item.UUID == UUID);
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
      UUID: UUID,
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
          <button>-</button>
          <span>{amount}</span>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    );
  }
}
