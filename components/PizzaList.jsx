import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
   console.log(pizzaList.length);
   const len=pizzaList.length
   
   function renderProduct(){
    return (
   pizzaList.forEach((pizza) => {
     <PizzaCard key={pizza._id} pizza={pizza} />
    })
    )
   }
   
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
      {pizzaList.map((pizza,key) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}


       
   
      </div>
    </div>
  );
};

export default PizzaList;
