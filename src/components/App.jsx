import { useState, useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import styles from "../Css/App.module.css";
export default function App() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          let selectedItems = [];
          for (let i = 0; i < 12; i++) {
            selectedItems.push(data[i]);
          }
          setData(selectedItems);
          console.log(data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setloading(false);
        });
    };
    getData();
  }, []);
  function addToCart(item) {
    let itemIndex = cart.findIndex((obj) => obj.id == item.id);

    if (itemIndex == -1) {
      const tempItem = { ...item, amount: 1 };
      const temp = [...cart];
      temp.push(tempItem);
      setCart(temp);
    } else {
      const tempItem = { ...cart[itemIndex] };
      tempItem.amount++;
      const temp = [...cart];
      temp[itemIndex] = tempItem;
      setCart(temp);
    }
  }
  function removeItem(item) {
    let itemIndex = cart.findIndex((obj) => obj.id == item.id);
    if (itemIndex == -1) {
      return;
    } else {
      if (cart[itemIndex].amount == 1) {
        const temp = [...cart];
        temp.splice(itemIndex, 1);
        setCart(temp);
      } else {
        const temp = [...cart];
        const item = temp[itemIndex];
        item.amount--;
        setCart(temp);
      }
    }
  }
  function calcSum() {
    let sum = 0;
    cart.map((item) => {
      sum = sum + item.amount;
    });
    return sum;
  }

  return (
    <div className={styles.App}>
      <Header calcSum={calcSum}></Header>
      <Outlet
        context={{ cart, addToCart, removeItem, data, loading, error }}
      ></Outlet>
      <footer>
        <span className={styles.madeby}>Made by RezaAlam20</span>
      </footer>
    </div>
  );
}
