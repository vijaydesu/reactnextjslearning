

import { useState, useRef, useEffect } from "react";
import HouseRow, { HouseRowMem } from "./houseRow";

const houseArray = [
    {
      id: 1,
      address: "12 Valley of Kings, Geneva",
      country: "Switzerland",
      price: 900000,
    },
    {
      id: 2,
      address: "89 Road of Forks, Bern",
      country: "Switzerland",
      price: 500000,
    },
  ];

  const HouseList = () => {
    const [houses,setHouses] = useState([]);
    const [counter,setCounter] = useState(300);

    
    useEffect(() => {
        const fetchHouses = async () => {
          const response = await fetch("/api/houses");
          const houses = await response.json();
          setHouses(houses);
        };
        fetchHouses();
      }, []);

    const addHouse = () =>{
       
        setHouses(
            [...houses,{
                id: counter,
                address: "189 Road of Forks, Bern"+ counter,
                country: "Canada",
                price: 1500000,
              }]
        );
        setCounter(counter=>counter+1);
    };

    return(
        <>
         <div className="grid mb-2">
        <h5 className="themeFontColor text-center text-2xl">
          Houses currently on the market
        </h5>
      </div>
      <table className="table-fixed w-full bg-white border border-gray-300 ">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Country</th>
            <th className="border border-gray-300 px-4 py-2">Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            
           // <HouseRow key={h.id} house={h} />

           <HouseRowMem key={h.id} house={h} />


            /* Spread Operator - <HouseRow key={h.id} {...h} /> */
            /* Deconstructed Fields - <HouseRow key={h.id} address={h.address} price={h.price} country={h.country} /> */

          )
        
          )}
        </tbody>
      </table>
      <button className="btn btn-blue" onClick={addHouse}>
        Add 
      </button>
        </>

    );
  };

  export default HouseList;
