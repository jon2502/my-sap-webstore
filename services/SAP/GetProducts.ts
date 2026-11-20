
export interface Product {
  ProductId: number;
  ProductName: string;
  ProductDesctiption: string;
  Price: number;
  ProductImage: string;
}

interface ApiResponse {
  value: Product[];
}


export const GetProducts = async () => {

  const stockUrl = process.env.NEXT_PUBLIC_SAP_GET_PPRODUCT;
      
  if (!stockUrl) {
    throw new Error("SAP_STOCK_URL is not configured");
  }

  console.log(stockUrl)

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
      const responseData : ApiResponse = await response.json();
      const data: Product[] = responseData.value.map((item) => ({
        ProductId: item.ProductId,
        ProductName: item.ProductName,
        ProductDesctiption: item.ProductDesctiption,
        Price: item.Price,
        ProductImage: item.ProductImage,
      }));
      
      return data ?? []

    } catch (error) {
      console.error("Failed to load stocks:", error);
      return [];
  }
}