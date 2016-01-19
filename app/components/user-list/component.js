import Ember from 'ember';
import connect from 'ember-redux-example/helpers/connect';

var stateToComputed = (state) => {
    return {
        low: state.low,
        high: state.high
    };
};

var dispatchToActions = (dispatch) => {
    return {
        up: () => dispatch({type: 'UP'}),
        down: () => dispatch({type: 'DOWN'})
    };
};

var UserListComponent = Ember.Component.extend();

export default connect(stateToComputed, dispatchToActions)(UserListComponent);
