"use client";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import { GetProduct } from "@/services/SAP/GetProduct"
import Image from 'next/image';

interface Product {
  ProductId: number;
  ProductName: string;
  ProductDesctiption: string;
  Price: number;
  ProductImage: string;
}

const page =  () => {
    const params = useParams<{ id: string}>()
    const id = params.id;

    const [product, setProduct] = useState<Product>()


    useEffect(() =>{
        const fetchData = async () => {
        const data = await GetProduct({id});
        console.log(data)
        setProduct(data);
        }
        fetchData();
    },[])

  if (!product) {
  return <p>Loading product...</p>;
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <h1>{product.ProductName}</h1>
          <Image
          src={`/Images/${product.ProductImage}.jpg`}
          width={500}
          height={500}
          alt={product.ProductName}
          />
          <p>{product.ProductDesctiption} KR.</p>
          <p>{product.Price} KR.</p>
    </div>
  )
}

export default page
