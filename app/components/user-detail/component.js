import Ember from 'ember';
import connect from 'ember-redux-example/helpers/connect';

var stateToComputed = (state) => {
    return {
        user: state.users.user
    };
};

var UserDetailComponent = Ember.Component.extend();

export default connect(stateToComputed)(UserDetailComponent);
