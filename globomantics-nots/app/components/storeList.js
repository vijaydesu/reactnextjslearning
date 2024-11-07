import { useState, useRef, useEffect } from "react";
import StoreFuelPriceRow from "./storeFuelPriceRow";
import useFuelProducts from "@/app/hooks/useFuelProducts"


const StoreList = ({storeId}) => {

  //const {fuelProducts}=useFuelProducts(storeId);

  const [fuelProducts, setFuelProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchStoreFuelPrices = async () => {
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
        const products=result?.fuelPriceData[0]?.products;
        setFuelProducts(products);
        setLoading(false);
        console.log(result)
      } catch (error) {
        console.error(error);
      };
     
    };
    fetchStoreFuelPrices();
  }, [storeId]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="grid mb-2">
        <h5 className="themeFontColor text-center text-2xl">
          Fuel Prices
        </h5>
      </div>
      <table className="table-fixed w-full bg-white border border-gray-300 ">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Product Code</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {fuelProducts?.map((fp) => (

            // <HouseRow key={h.id} house={h} />

            <StoreFuelPriceRow key={fp.productCode} fuelProduct={fp} />
           

            /* Spread Operator - <HouseRow key={h.id} {...h} /> */
            /* Deconstructed Fields - <HouseRow key={h.id} address={h.address} price={h.price} country={h.country} /> */

          )

          )}
        </tbody>
      </table>

    </>

  );
};

export default StoreList;
