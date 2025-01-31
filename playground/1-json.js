import fs from "fs";

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Andy";
data.age = 23;
data.planet = "Mars";

console.log(data);

fs.writeFileSync("1-json.json", data);
