import { marketService } from '../services/market.service.js';

export const marketStore = {
    state: {
        isLoading: false,
        markets: [],
        currMarket: null,
    },
    getters: {
        isLoading({ isLoading }) { return isLoading; },
        markets({ markets }) { return markets; },
        currMarket({ currMarket }) { return currMarket; },
    },
    mutations: {
        setLoading(state, { isLoading }) {
            state.isLoading = isLoading;
        },
        setMarkets(state, { markets }) {
            state.markets = markets;
        },
        setMarket(state, { currMarket }) {
            state.market = currMarket;
        }
    },
    actions: {
        async loadMarkets({ commit }) {
            try {
                commit({ type: 'setLoading', isLoading: true });
                const markets = await marketService.query()
                commit({ type: 'setMarkets', markets })
                commit({ type: 'setLoading', isLoading: false });
                return markets;
            } catch (err) {
                console.log('marketStore: Error in loadMarkets', err)
                throw err
            }
        },
        async loadMarket(context, { boardId }) {
            console.log('In market.store => loadMarket')
            // try {
            //     context.commit({ type: 'setLoading', isLoading: true });
            //     const board = await boardService.getById(boardId)
            //     context.commit({ type: 'setBoard', board })
            //     context.commit({ type: 'setLoading', isLoading: false });
            //     return board;
            // } catch (err) {
            //     console.log('marketStore: Error in loadBoard', err)
            //     throw err
            // }
        },
    },
}