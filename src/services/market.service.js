import { yahooService } from './yahoo.service.js';

const KEY = 'marketsDB'
export const marketService = {
    query,
    reset
}

async function query() {
    let markets = JSON.parse(localStorage.getItem(KEY)) || []
    if (markets.length === 0) {
        const res = await yahooService.authorization()
        markets = res.data.marketSummaryResponse.result;
        _save(KEY, markets)
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