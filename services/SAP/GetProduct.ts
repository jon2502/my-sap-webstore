
export interface Product {
  ProductId: number;
  ProductName: string;
  ProductDesctiption: string;
  Price: number;
  ProductImage: string;
}

export const GetProduct = async ({ id }: { id: string }) => {

  const stockUrl = process.env.NEXT_PUBLIC_SAP_GET_PPRODUCT+"/"+id;
      
  if (!stockUrl) {
    throw new Error("SAP_STOCK_URL is not configured");
  }

  const url = new URL(stockUrl, window.location.origin);
  try {
      const response = await fetch(
        url,
        {
          headers: {
            Accept: "application/json",
          },
          credentials: "include",
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`SAP error: ${response.status}`);
      }

      const responseData= await response.json();
      const data: Product = {
        ProductId: responseData.ProductId,
        ProductName: responseData.ProductName,
        ProductDesctiption: responseData.ProductDesctiption,
        Price: responseData.Price,
        ProductImage: responseData.ProductImage,
      }
      return data

    } catch (error) {
      console.error("Failed to load stocks:", error);
      return undefined;
  }
}