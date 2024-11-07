import { useState, useEffect } from "react";



 const useFuelProducts =({storeId}) =>{
    const [fuelProducts, setFuelProducts] = useState([]);

    const fetchStoreFuelPrices = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("client_id", "bf579ff9ceca4eabbc2e8e4ac5094ac0");
        myHeaders.append("client_secret", "D11804Fdb6A94baDA7201D08C60602ED");
    
        const raw = JSON.stringify({
          "storeId": [
            "1024"
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
          const products=result?.fuelPriceData[0]?.products;
          console.log("Response receive as : "+JSON.stringify(products));
          setFuelProducts(products);
          console.log(result)
        } catch (error) {
          console.error(error);
        };
       
      };

      useEffect(() => {
        fetchStoreFuelPrices();
      }, []); 



    return fuelProducts;
}

export default useFuelProducts;

