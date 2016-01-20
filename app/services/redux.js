import Ember from 'ember';
import Redux from 'npm:redux';

var { createStore, combineReducers } = Redux;

var low = ((state=0, action) => { // jshint ignore:line
    if(action.type === 'UP') {
        return state + 1;
    }
    return state;
});

var high = ((state=9, action) => { // jshint ignore:line
    if(action.type === 'DOWN') {
        return state - 1;
    }
    return state;
});

var store = createStore(combineReducers({low: low, high: high}));

export default Ember.Service.extend({
    getState() {
        return store.getState();
    },
    dispatch(action) {
        store.dispatch(action);
    },
    subscribe(func) {
        store.subscribe(func);
    }
});
