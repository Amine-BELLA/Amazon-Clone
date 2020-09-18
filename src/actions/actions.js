import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './types';

function addToBasket(item) {
    return {
        type: ADD_TO_BASKET,
        payload: item
    }
}

export default addToBasket;