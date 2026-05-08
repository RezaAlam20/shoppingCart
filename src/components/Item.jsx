export default function Item({ url, alt, title, amount, price }) {
  if (amount == 0) {
    return (
      <div>
        <img src={url} alt={alt} />
        <div>
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <button>Add to Cart</button>
      </div>
    );
  } else {
    <div>
      <img src={url} alt={alt} />
      <div>
        <span>{title}</span>
        <span>{price}</span>
      </div>
      <div>
        <button>-</button>
        <span>{amount}</span>
        <button>+</button>
      </div>
    </div>;
  }
}
