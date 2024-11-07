import { useState, useRef, useEffect } from "react";
import StoreFuelPriceRow from "./storeFuelPriceRow";


const StoreList = ({fuelProducts,storeId}) => {

 


  return (
    <>
      <div className="grid mb-2">
        <h5 className="themeFontColor text-center text-2xl">
          Fuel Prices - {storeId}
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
