import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";

export default function Home({pizzaList}) {
  return (<> <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
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
    </div></>
   
  );
}

export const getServerSideProps = async()=>{
  const url=process.env.API_URL
  const res=await axios.get(`${url}/api/products`)
  console.log(res);
  
 return{
 props:{
  pizzaList:res.data
 }

 }
}
