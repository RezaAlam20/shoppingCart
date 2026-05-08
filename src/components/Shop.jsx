import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";

export default function Shop() {
  const [data, setData] = useState("");
  const [loading, setloading] = useState("true");
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
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
  return (
    <section>
      <Item
        url={data[1].image}
        alt={data[1].description}
        title={data[1].title}
        amount={0}
        price={data[1].price}
      ></Item>
    </section>
  );
}
