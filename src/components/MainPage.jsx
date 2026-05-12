import img1 from "../assets/Mike.jpg";
import img2 from "../assets/logan.jpg";
import img3 from "../assets/Anthony.jpg";
import styles from "../Css/MainPage.module.css";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Item from "./Item.jsx";

export default function MainPage() {
  const [currentItem, setCurrentItem] = useState(0);
  const { data, loading } = useOutletContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => {
        if (prev === 11) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  function getImage() {
    if (loading) {
      return <img className={styles.svg} src="../assets/loading.svg" />;
    } else {
      const title = data[currentItem].title;
      const items = title.split(" ");
      items.splice(3);
      const ShortTitle = items.join(" ");
      return (
        <div className={styles.holder}>
          <img src={data[currentItem].image} />
          <span className={styles.title}>{ShortTitle}</span>
        </div>
      );
    }
  }

  function nextImage() {
    console.log("nextImage function called ");
    if (loading) {
      return;
    } else {
      if (currentItem == 11) {
        setCurrentItem(0);
      } else {
        setCurrentItem(currentItem + 1);
      }
    }
  }
  function prevImage() {
    if (loading) {
      return;
    } else {
      if (currentItem == 0) {
        setCurrentItem(11);
      } else {
        setCurrentItem(currentItem - 1);
      }
    }
  }
  function getHalf() {
    if (loading) {
      return [];
    } else {
      const firstHalf = data.slice(0, Math.ceil(data.length / 2));
      return firstHalf;
    }
  }

  return (
    <>
      <section>
        <h1 className={styles.phrase}>
          Made to <span>Fade</span> Designed to <span>Stay</span>.
        </h1>

        <div className={styles.imageContainer}>
          <img src={img1} alt="image" />
          <img src={img2} alt="image" />
          <img src={img3} alt="image" />
        </div>
      </section>
      <section className={styles.trending}>
        <div className={styles.wrapper}>
          <h1>Trending</h1>
          <h3>
            See the most popular items in our store
            <br />
            Your next favorite is waiting
          </h3>
        </div>
        <div className={styles.carousel}>
          <div className={styles.container}>
            <button className={styles.btnPrimary} onClick={prevImage}>
              {"<"}
            </button>
            {getImage()}

            <button onClick={nextImage} className={styles.btnPrimary}>
              {">"}
            </button>
          </div>
          <button className={styles.btnLight}>ADD TO CART</button>
        </div>
      </section>
      <section className={styles.preview}>
        {getHalf().map((item) => {
          return (
            <Item
              url={item.image}
              price={item.price}
              id={item.id}
              alt={item.title}
              title={item.title}
            ></Item>
          );
        })}
        <button>view more</button>
      </section>
    </>
  );
}
