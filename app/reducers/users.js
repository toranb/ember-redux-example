import { uniq } from 'ember-redux-example/utilities/array';

const initialState = {
    all: [],
    selected: null
};

export default ((state=initialState, action) => { // jshint ignore:line
    if (action.type === 'DESERIALIZE_USERS') {
        return {all: uniq(state.all, action.response), selected: state.selected};
    }
    if (action.type === 'DESERIALIZE_USER') {
        return {all: uniq(state.all, action.response), selected: action.response.id};
    }
    return state;
});
