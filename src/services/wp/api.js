import axios from 'axios';

const url = 'http://wordpress-398253-1285106.cloudwaysapps.com';

export default {

    async fetchCollection (endpoint) {
        return await axios.get('https://wordpress-398253-1285106.cloudwaysapps.com' + endpoint);
    },

    async fetch (endPoint) {
        return await axios.get(url + endPoint);
    },

    async post (endPoint, data) {

        return await axios.post(url + endPoint, data);
    }

}
