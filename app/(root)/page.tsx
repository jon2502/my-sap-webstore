"use client"
import { useEffect, useState } from 'react'
import {GetAllProducts} from "@/services/SAP/GetAllProducts"




const  page = () => {
  const [products, setProducts] = useState([])

    useEffect(() =>{
    const fetchData = async () => {
      const data = await GetAllProducts();
      console.log(data)
      setProducts(data);
    }
    fetchData();
  },[])
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {products.map((product:any)=>(
        <div key={`${product.WarehouseId}${product.ProductId}`}>
          <h1>{product.ProductName}</h1>
        </div>
      ))}
    </div>
  );
}
export default page
