import currencyFormatter from "../helpers/currencyFormatter";
import React from "react";

const StoreFuelPriceRow = ({fuelProduct}) => {
    return(
        <>
             <tr  className="hover:bg-green-100 text-center">
            <td className="border border-gray-300 px-4 py-2" > {fuelProduct.fuelDescription}</td>
            <td className="border border-gray-300 px-4 py-2">{fuelProduct.productCode}</td>
            <td className="border border-gray-300 px-4 py-2">{currencyFormatter.format(fuelProduct.price)}</td>
           </tr>

        </>
    );
};


export default StoreFuelPriceRow;
const StoreFuelPriceRowMem = React.memo(StoreFuelPriceRow);



export {StoreFuelPriceRowMem};