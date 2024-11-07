import React from "react";
import Banner from "@/app/components/banner";
import StoreDetail from "@/app/components/storeDetail";


 async function fetchFuelProducts(storeId) {
  //const { storeId } = context.params; // Access the dynamic 'slug' from the route

  let products;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("client_id", "bf579ff9ceca4eabbc2e8e4ac5094ac0");
  myHeaders.append("client_secret", "D11804Fdb6A94baDA7201D08C60602ED");

  const raw = JSON.stringify({
    "storeId": [
      storeId
    ]
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  try {
    const response = await fetch("https://api.caseys.io/caseys-ea-public-api/api/store-fuelprice", requestOptions);
    const result = await response.json();
    products = result?.fuelPriceData[0]?.products;

    console.log(result)
  } catch (error) {
    console.error(error);
  };



  return products;
  
} 



export default  async function Page({ params }) {
  const id = (await params).id;
  const products = await fetchFuelProducts(id);

  return (
    <>
      <Banner headerText={"Store Fuel Price -" + id} bannerLogo="/CaseysLogo.png" />
      <div> Store: {id}</div>
      <StoreDetail fuelProducts={products} storeId={id} />
    </>

  )
}