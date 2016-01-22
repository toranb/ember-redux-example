import Ember from 'ember';
import ajax from 'ember-redux-example/utilities/ajax';
import route from 'ember-redux-example/helpers/route';

var model = (dispatch) => {
    return ajax('/api/users', 'GET').then(response => dispatch({type: 'DESERIALIZE_USERS', response: response}));
};

var UsersRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set('extended', 'yes');
    }
});

export default route(model)(UsersRoute);
