import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const [cart, setCart] = useState([]);
  function addToCart(item) {
    let itemIndex = cart.findIndex((obj) => obj.UUID == item.UUID);

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
    let itemIndex = cart.findIndex((obj) => obj.UUID == item.UUID);
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

  return (
    <>
      <Header></Header>
      <Outlet context={{ cart, addToCart, removeItem }}></Outlet>
      <footer>This is the footer</footer>
    </>
  );
}
