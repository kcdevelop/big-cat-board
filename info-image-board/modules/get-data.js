import { dataURL } from './variables.js';

//Get the JSON data using fetch API
const getData = async () => {
    let dataSet = await fetch(dataURL);
    let dataResponse = await dataSet.json();

    dataResponse = JSON.stringify(dataResponse);
     dataResponse = JSON.parse(dataResponse);

     return dataResponse;
}

//Export parsed JSON (Object)
export const data = await getData();