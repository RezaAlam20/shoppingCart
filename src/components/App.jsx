import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const [cart, setCart] = useState([]);
  function addToCart(item) {
    let itemIndex = cart.findIndex((obj) => obj.UUID == item.UUID);
    console.log(itemIndex);

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

  return (
    <>
      <Header></Header>
      <Outlet context={{ cart, addToCart }}></Outlet>
      <footer>This is the footer</footer>
    </>
  );
}
