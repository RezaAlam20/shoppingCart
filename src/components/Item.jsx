import styles from "../Css/Item.module.css";
import { useState } from "react";
export default function Item({ url, alt, title, price, initialAmount = 0 }) {
  const [amount, setAmount] = useState(initialAmount);
  function addToCart() {
    setAmount(amount + 1);
  }
  function removeFromCart() {
    setAmount(amount - 1);
  }
  if (amount == 0) {
    return (
      <div className={styles.item}>
        <img src={url} alt={alt} />
        <div>
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
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
          <button onClick={removeFromCart}>-</button>
          <span>{amount}</span>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    );
  }
}
