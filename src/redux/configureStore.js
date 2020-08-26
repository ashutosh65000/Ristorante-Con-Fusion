import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'

export const ConfigureStore = () => {
    const store = createStore(
        // Splitting and Decoupling of the reducer Functions
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}