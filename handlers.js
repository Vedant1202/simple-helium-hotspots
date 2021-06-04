const axios = require('axios');

const HELIUM_API_URL = 'https://api.helium.io/v1/';

const getCities = async () => {
    try {
        const url = HELIUM_API_URL + 'cities';
        const resp = await axios.get(url);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
}

const getHotspotsByCity = async (cityId) => {
    try {
        const url = HELIUM_API_URL + 'cities/' + cityId + '/hotspots';
        const resp = await axios.get(url);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getCities, getHotspotsByCity };