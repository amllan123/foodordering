import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE HOT PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Plot No:54 Saheed Ngar
            <br /> BBSR, 759301
            <br /> (+91) 9988776655
          </p>
          <p className={styles.text}>
            Plot No:59 Rajpath Marg
            <br /> Delhi, 757970
            <br /> (+91) 99887766554
          </p>
          <p className={styles.text}>
           #65 Juhu Beach
            <br /> Mumbai, 797979
            <br />  (+91) 99887766553
          </p>
         
          <p className={styles.text}>
           #65 Juhu Beach
            <br /> Mumbai, 797979
            <br />  (+91) 99887766553
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
