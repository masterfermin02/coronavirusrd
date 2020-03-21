import axios from "axios"

 export default {

    data: {
      url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/"
    },

    async getLatestStatByCountry(country) {
        return  await axios.get(this.data.url + "latest_stat_by_country.php" + country, {
            headers: {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "48ebf7d889msh4913d308ebba5ecp1c9882jsnd27b0d9a1aaa"
            }
        });
    }
 }
