
export const GetAllProducts = async () => {
  const stockUrl = process.env.NEXT_PUBLIC_SAP_GET_STOCK;

  if (!stockUrl) {
    throw new Error("SAP_STOCK_URL is not configured");
  }

  const url = new URL(stockUrl, window.location.origin);
  url.searchParams.set("$top", "50");
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
      const data = await response.json();
      return data.value
      
    } catch (error) {
      console.error("Failed to load stocks:", error);
  }
}