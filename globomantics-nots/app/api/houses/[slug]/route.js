import path from "path";
import fs from "fs";
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const dynamic = 'force-static'
 
export async function GET(req, { params }) {
  console.log("Receiving request for houses....");
 // const id = parseInt(req?.query?.id);
  const id = parseInt((await params).slug);
  const jsonFile = path.resolve("./", "houses.json");
  const readFileData = await readFile(jsonFile);
  const res=new Response();
  await delay(100);
  const houses = JSON.parse(readFileData).houses;
  const house = houses.find((rec) => rec.id === id);
  if (house) {
    //res.setHeader("Content-Type", "application/json");
    //res.status(200).json(house);
    console.log(`GET /api/houses/${id} status: 200`);
    return new Response( JSON.stringify(house),{
      status: 200,
      headers: { 'Content-Type': `application/json` },
    });
  } else {
    res.status(404).send("house not found");
  }
  
  return res;
}