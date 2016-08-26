import {INCREMENT_NUMBER} from '../actions/CounterActions'
import {DECREMENT_NUMBER} from '../actions/CounterActions'

const initialState = {
    count:0
};

function CounterReducer(state=initialState, action){
    switch(action.type){
        case INCREMENT_NUMBER:
            return Object.assign({}, state, {
                count:state.count+1
            });
        case DECREMENT_NUMBER:
            return Object.assign({}, state, {
                count:state.count-1
            });
        default:
            return state;
    }
}

export default CounterReducer
