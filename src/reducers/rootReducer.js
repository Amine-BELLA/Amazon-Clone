import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actions/types';

const initialState = {
    basket: [],
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_BASKET: {
            return (
                {
                    ...state,
                    basket: [...state.basket, action.payload]
                }
            )
        }

        default:
            return state;
    }

}

export default rootReducer;