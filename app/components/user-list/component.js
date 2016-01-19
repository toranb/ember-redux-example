import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        this.store.subscribe(() => {
            this.notifyPropertyChange('low');
        });
    },
    low: Ember.computed(function() {
        return this.store.getState();
    }),
    actions: {
        up() {
            this.store.dispatch({type: 'UP'});
        }
    }
});
