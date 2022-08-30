import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({pizzalist}) {
  return (<> <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzalist={pizzalist} />
    </div></>
   
  );
}

export const getServerSideProps = async()=>{
  const url=process.env.API_URL
  const res=await axios.get(`${url}/api/products`)
 return{
 props:{
  pizzalist:res.data
 }

 }
}
