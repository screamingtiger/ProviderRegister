import axios from 'axios'


class Api2 {
    getCountry =  async () : Promise<string> => {
        return (await axios.get("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8")).data;
    }
}

export default Api2;