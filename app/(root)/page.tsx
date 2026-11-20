"use client"
import { useEffect, useState } from 'react'
import {GetProducts} from "@/services/SAP/GetProducts"
import Image from 'next/image';


interface Product {
  ProductId: number;
  ProductName: string;
  ProductDesctiption: string;
  Price: number;
  ProductImage: string;
}


const page = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
  console.log("EFFECT TEST");
}, []);
    useEffect(() =>{
    const fetchData = async () => {
      const data = await GetProducts();
      setProducts(data);
    }
    fetchData();
  },[])
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {products.map((product:Product)=>(
        <div key={product.ProductId}>
          <h1>{product.ProductName}</h1>
          <Image
           src={`/Images/${product.ProductImage}.jpg`}
          width={500}
          height={500}
          alt={product.ProductName}
          />
          <p>{product.Price} KR.</p>
        </div>
      ))}
    </div>
  );
}
export default page
