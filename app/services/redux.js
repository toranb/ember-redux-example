import Ember from 'ember';
import redux from 'npm:redux';
import thunk from 'npm:redux-thunk';
import { uniq } from 'ember-redux-example/utilities/array';

var { createStore, applyMiddleware, combineReducers } = redux;

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

var all = ((state=3, action) => { // jshint ignore:line
    if(action.type === 'MORE') {
        return state + 1;
    }
    return state;
});

const initialState = {
    all: []
};

var users = ((state=initialState, action) => { // jshint ignore:line
    if (action.type === 'DESERIALIZE_USERS') {
        return {all: uniq(state.all, action.response)};
    }
    return state;
});

var createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

var store = createStoreWithMiddleware(combineReducers({low: low, high: high, all: all, users: users}));

export default Ember.Service.extend({
    getState() {
        return store.getState();
    },
    dispatch(action) {
        store.dispatch(action);
    },
    subscribe(func) {
        return store.subscribe(func);
    }
});
