import axios from 'axios'

export  const getGoogle = async () : Promise<string> => {
    return (await axios.get("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8")).data;
}

export const getNothing = async() : Promise<string> => {
    return Promise.resolve("Nothing Here");
}
