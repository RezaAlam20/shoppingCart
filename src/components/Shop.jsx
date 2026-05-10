import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";
import styles from "../Css/Shop.module.css";

export default function Shop() {
  const [data, setData] = useState("");
  const [loading, setloading] = useState("true");
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
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(data);
  return (
    <section className={styles.shop}>
      {data.map((item) => {
        return (
          <Item
            url={item.image}
            title={item.title}
            alt={item.title}
            price={item.price}
            initialAmount={0}
          ></Item>
        );
      })}
    </section>
  );
}
