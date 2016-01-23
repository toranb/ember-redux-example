import { uniq } from 'ember-redux-example/utilities/array';

const initialState = {
    all: [],
    user: null,
    selected: null
};

var findById = (all, selected) => {
    return all.filter(function(model) {
            return model.id === selected;
    })[0];
};

export default ((state=initialState, action) => { // jshint ignore:line
    if (action.type === 'DESERIALIZE_USERS') {
        return {all: uniq(state.all, action.response), user: state.user, selected: state.selected};
    }
    if (action.type === 'DESERIALIZE_USER') {
        var all = uniq(state.all, action.response);
        var selected = action.response.id;
        var user = findById(all, selected);
        return {all: all, user: user, selected: selected};
    }
    return state;
});
