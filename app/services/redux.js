import Ember from 'ember';
import Redux from 'npm:redux';

var { createStore } = Redux;

var reducer = ((state=0, action) => {
    if(action.type === 'UP') {
        return state + 1;
    }
    return state;
});

var store = createStore(reducer);

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
