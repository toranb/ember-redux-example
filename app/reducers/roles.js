import { uniq } from 'ember-redux-example/utilities/array';

const initialState = {
    all: []
};

export default ((state=initialState, action) => { // jshint ignore:line
    if (action.type === 'ADD_ROLE') {
        return Object.assign({}, state, {
            all: uniq(state.all, action.response)
        });
    }
    return state;
});
