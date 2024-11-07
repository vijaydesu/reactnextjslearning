import path from "path";
import fs from "fs";
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const dynamic = 'force-static'
 
export async function GET(req) {
  const method = req?.method;
  const jsonFile = path.resolve("./", "houses.json");
  const readFileData = await readFile(jsonFile);
  const houses = JSON.parse(readFileData).houses;
  await delay(1000);
  try {
    if (!houses) {
      //res.status(404).send("Error: Request failed with status code 404");
      new Response( "Error: Request failed with status code 404",{
        status: 404
      });
    } else {
      //res.setHeader("Content-Type", "application/json");
      //res.status(200).send(JSON.stringify(houses, null, 2));
      console.log("GET /api/houses  status: 200");
      return new Response( JSON.stringify(houses,null,2),{
        status: 200,
        headers: { 'Content-Type': `application/json` },
      });
    }
  } catch (e) {
    console.log("/api/houses error:", e);
  }

}