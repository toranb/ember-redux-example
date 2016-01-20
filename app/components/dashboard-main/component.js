import Ember from 'ember';
import connect from 'ember-redux-example/helpers/connect';

var stateToComputed = (state) => {
    return {
        all: state.all
    };
};

var dispatchToActions = (dispatch) => {
    return {
        more: () => dispatch({type: 'MORE'})
    };
};

var DashboardMainComponent = Ember.Component.extend();

export default connect(stateToComputed, dispatchToActions)(DashboardMainComponent);
