import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { cart } = useOutletContext();
  return (
    <div>
      {cart.map((item) => {
        return (
          <>
            <span>{item.title}</span>
            <span>{item.amount}</span>
          </>
        );
      })}
    </div>
  );
}
