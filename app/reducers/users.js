import { uniq } from 'ember-redux-example/utilities/array';

const initialState = {
    all: [],
    selected: null
};

export default ((state, action) => {
    if (action.type === 'DESERIALIZE_USERS') {
        return Object.assign({}, state, {
            all: uniq(state.all, action.response)
        });
    }
    if (action.type === 'DESERIALIZE_USER') {
        return Object.assign({}, state, {
            all: uniq(state.all, action.response),
            selected: action.response
        });
    }
    return state || initialState;
});
