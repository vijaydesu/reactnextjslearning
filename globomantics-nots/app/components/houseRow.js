import currencyFormatter from "../helpers/currencyFormatter";
import React from "react";

const HouseRow = ({house}) => {
    return(
        <>
             <tr  className="hover:bg-green-100 text-center">
            <td className="border border-gray-300 px-4 py-2" > {house.address}</td>
            <td className="border border-gray-300 px-4 py-2">{house.country}</td>
            <td className="border border-gray-300 px-4 py-2">{currencyFormatter.format(house.price)}</td>
           </tr>

        </>
    );
};

const HouseRowMem = React.memo(HouseRow);

export default HouseRow;

export {HouseRowMem};