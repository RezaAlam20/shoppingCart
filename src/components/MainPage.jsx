import img1 from "../assets/Mike.jpg";
import img2 from "../assets/logan.jpg";
import img3 from "../assets/Anthony.jpg";

import styles from "../Css/MainPage.module.css";
export default function MainPage() {
  return (
    <>
      <section>
        <h1 className={styles.phrase}>Made to fade. Designed to stay</h1>

        <div className={styles.imageContainer}>
          <img src={img1} alt="image" />
          <img src={img2} alt="image" />
          <img src={img3} alt="image" />
        </div>
      </section>
      <section>
        <h1>Trending</h1>
        <div className={styles.carousel}>
          Image carousel
          <button>add to Cart</button>
        </div>
      </section>
      <section>
        Shop items
        <button>view more</button>
      </section>
    </>
  );
}
