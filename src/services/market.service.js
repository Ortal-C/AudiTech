
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
// const axios = require('axios')


var fetch = require('node-fetch');
const axios = require('axios');

// import { httpService } from './http.service'
// import { socketService, SOCKET_EMIT_BOARDS_WATCH, SOCKET_EMIT_BOARD_WATCH } from './socket.service'

const API_KEY = 'Te2x5CaAEGVod0rPNpLg2oaoT69yx0FYUH6ufeh0'
const KEY = 'marketsDB'
export const marketService = {
    query,
    getById,
}

async function query() {
    let markets = JSON.parse(localStorage.getItem(KEY)) || []
    if (markets.length === 0) {
        const res = await axios.get('https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=IL', {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': 'Te2x5CaAEGVod0rPNpLg2oaoT69yx0FYUH6ufeh0'
            }
        });
        markets = res.data.marketSummaryResponse.result;
        _save(KEY, markets)
    } else {
        console.log('Markets fetched from local-storage');
    }
    return markets
}

// async function query() {

//     // const markets = await httpService.get(`markets`)
//     // socketService.emit('markets-watch', markets)
//     // return markets;
// }

async function getById(marketId) {
    console.log('market service => getById');

    // const board = await httpService.get(`markets/${marketId}`)
    // socketService.emit('market-watch', board)
    // return board;
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}