import Ember from 'ember';
import connect from 'ember-redux-example/helpers/connect';

var stateToComputed = (state) => {
    return {
        users: state.users.all
    };
};

var UserListComponent = Ember.Component.extend();

export default connect(stateToComputed)(UserListComponent);
