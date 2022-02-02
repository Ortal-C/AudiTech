import { marketService } from '../services/market.service.js';

export const marketStore = {
    state: {
        isLoading: false,
        filterBy: 'All',
        markets: [],
        currMarket: null,
    },
    getters: {
        isLoading({ isLoading }) { return isLoading; },
        filteredMarkets({ markets, filterBy }) {
            console.log('filterBy', filterBy);
            switch (filterBy) {
                case 'positiveChange':
                    return markets.filter(market => market.regularMarketChange.raw > 0)
                case 'negativeChange':
                    return markets.filter(market => market.regularMarketChange.raw < 0)
                default:
                    return markets;
            }
        },
        markets({ markets }) { return markets; },
        currMarket({ currMarket }) { return currMarket; },
    },
    mutations: {
        setFilterBy(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        setLoading(state, { isLoading }) {
            state.isLoading = isLoading;
        },
        setMarkets(state, { markets }) {
            state.markets = markets;
        },
        setCurrMarket(state, { currMarket }) {
            state.currMarket = currMarket;
        }
    },
    actions: {
        async loadMarkets({ commit }) {
            try {
                commit({ type: 'setLoading', isLoading: true });
                const markets = await marketService.query()
                commit({ type: 'setFilterBy', filterBy: 'all' })
                commit({ type: 'setMarkets', markets })
                commit({ type: 'setLoading', isLoading: false });
                return markets;
            } catch (err) {
                console.log('marketStore: Error in loadMarkets', err)
                throw err
            }
        },
        async resetMarkets({ commit }) {
            try {
                await marketService.reset()
                commit({ type: 'setMarkets', markets: [] })
                commit({ type: 'setCurrMarket', currMarket: null })
                return true;
            } catch (err) {
                console.log('marketStore: Error in resetMarkets', err)
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