import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Admin.module.css'
import axios from 'axios'
import AddButton from '../../components/AddButton'
import Add from '../../components/Add'
const Index = ({orders,products}) => {
    const url=process.env.NEXT_PUBLIC_API_URL 
    const [pizzalist,setPizzalist] = useState(products);
    const [orderlist,setOrderlist] =useState(orders);
    const [close,setClose]=useState(true);
        
    const status=["Ready for prepartion","Preparing", "On the Way", "Delivered",]


    const handleDelete =async (id) =>{
    try {
        
        const res =await axios.delete(`${url}/api/products/`+id)
        console.log("item deleted");
        setPizzalist(pizzalist.filter((pizaa)=> pizaa._id !== id));
    } catch (error) {
        console.log(error);
    }
    }

    const handleStatus = async (id) =>{ 
        const item=orderlist.filter((order)=> order._id === id)[0]
        const currentStatus=item.status;
try {
   
  const res=await axios.put(`${url}/api/orders/`+id,{ 
    status: currentStatus+1,
    

});
   setOrderlist([
    res.data,
    ...orderlist.filter((order) => order._id !==id )
   ])


} catch (error) {
    console.log(error);
}

    }


  return (<>
       
       <div className='addbutton'>
        <AddButton setClose={setClose}/>
        {!close && <Add  setClose={setClose} />}
       </div>

    <div className={styles.container}>


<div className={styles.items}>
    <h1 className={styles.title}>Products</h1>
    <table className={styles.table}>
<tbody>
    <tr className={styles.trTitle}>
        <th>Image</th>
        <th>ID</th>
        <th>Title</th>
        <th>Price</th>
        <th>Action</th>
    </tr>
</tbody>
{pizzalist.map((product)=>(

<tbody key={product._id}>
    <tr className={styles.trTitle}>
        <td> <Image src={product.img} height={50} width={50} /></td>
        <td>{product._id.slice(0,5)}</td>
        <td>{product.title}</td>
        <td>₹{product.prices[0]}</td>
        
        <td>
            <button className={styles.button}>Edit</button>
            <button className={styles.button}
             onClick={() =>handleDelete(product._id)}>Delete</button>
        </td>
    </tr>
</tbody>

))}

</table>


</div>
{/*  */}
<div className={styles.items}>
    <h1 className={styles.title}>Orders</h1>
    <table className={styles.table}>
<tbody>
    <tr className={styles.trTitle}>
        <th>ID</th>
        <th>Customer</th>
        <th>Total</th>
        <th>Payment</th>
        <th>Status</th>
        <th>Action</th>
    </tr>
</tbody>
{orderlist.map((order)=>(
<tbody key={order._id}>


    <tr className={styles.trTitle}>
        <td>{order._id.slice(0,10)}</td>
        <td>{order.customer}</td>
        <td>₹{order.total}</td>
        <td>{order.method===0?<span>Cash</span> : <span>Paid</span>}</td>
        <td>{status[order.status]}</td>
        <td>
            <button className={styles.button}
             onClick={() =>handleStatus(order._id)}      
        
            >Next Stage</button>
        </td>
    </tr>
</tbody>

))}


</table>


</div>
    </div>
    </>
  )
}

export const getServerSideProps = async () =>{
    const url=process.env.API_URL
 const productres = await axios.get(`${url}/api/products`) 
 const orderres = await axios.get(`${url}/api/orders`) 

 return{
    props:{
        orders:orderres.data,
        products:productres.data
    }
 }

}


export default Index