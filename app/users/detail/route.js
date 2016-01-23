import Ember from 'ember';
import ajax from 'ember-redux-example/utilities/ajax';
import route from 'ember-redux-example/helpers/route';

var model = (dispatch, params) => {
    var { user_id } = params;
    return ajax(`/api/users/${user_id}`, 'GET').then(response => dispatch({type: 'DESERIALIZE_USER', response: response}));
};

var UsersDetailRoute = Ember.Route.extend({
    actions: {
        willTransition() {
            //need to figure this out and tdd it
            var store = this.get('store');
            store.dispatch({type: 'DISCONNECT_USER_DETAIL'});
        }
    }
});

export default route(model)(UsersDetailRoute);
