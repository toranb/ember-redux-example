import Ember from 'ember';
import connect from 'ember-redux-example/helpers/connect';

var stateToComputed = (state) => {
    return {
        users: state.users.all,
        selected: state.users.selected
    };
};

var UserDetailComponent = Ember.Component.extend({
    user: Ember.computed('users.[]', 'selected', function() {
        const selected = this.get('selected');
        return this.get('users').filter(function(u) {
            return u.id === selected;
        }).objectAt(0);
    })
});

export default connect(stateToComputed)(UserDetailComponent);
