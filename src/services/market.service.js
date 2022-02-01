const axios = require('axios');
const KEY = 'marketsDB'
const API_KEY = 'Te2x5CaAEGVod0rPNpLg2oaoT69yx0FYUH6ufeh0'
export const marketService = {
    query,
    reset
}

async function query() {
    let markets = JSON.parse(localStorage.getItem(KEY)) || []
    if (markets.length === 0) {
        const res = await axios.get('https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=IL', {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': API_KEY
            }
        });
        markets = res.data.marketSummaryResponse.result;
        _save(KEY, markets)
    } else {
        console.log('Markets fetched from local-storage');
    }
    return markets
}

async function reset() {
    localStorage.removeItem(KEY);
    return true;
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}