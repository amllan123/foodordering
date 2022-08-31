import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"
import Link from "next/link";
import Image from "next/image";

const PizzaList = ({pizzaList}) => {
   console.log(pizzaList);
  return (
    <div className={styles.container}>
    
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      {/* console.log({pizzalist}); */}
      <div className={styles.wrapper}>
      {pizzaList.map((pizza) => (
      <>
           <Link href={`/product/${pizza._id}`} ><a> <Image src={`${pizza.img}`} alt="" width="500" height="500" /> </a></Link>
    
    <h1 className={styles.title}>{pizza.title}</h1>
    <span className={styles.price}>₹{pizza.prices[2]}</span>
    <p className={styles.desc}>
     {pizza.desc}
    </p></>
        ))}
          
      </div>
    </div>
  );
};

export default PizzaList;
