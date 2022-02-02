const axios = require('axios');
const API_KEY = 'Te2x5CaAEGVod0rPNpLg2oaoT69yx0FYUH6ufeh0'

export const yahooService = {
    getMarketSummary
}

async function getMarketSummary() {
    return await axios.get('https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=IL', {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': API_KEY
        }
    });
}