import axios from 'axios'


class Api2 {
    getCountry =  async () : Promise<string> => {
        return Promise.resolve("FromMock");
    }
}

export default Api2;