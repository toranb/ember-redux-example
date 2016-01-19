import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        this.store.subscribe(() => {
            this.notifyPropertyChange('low');
            this.notifyPropertyChange('high');
        });
    },
    low: Ember.computed(function() {
        return this.store.getState().low;
    }),
    high: Ember.computed(function() {
        return this.store.getState().high;
    }),
    actions: {
        up() {
            this.store.dispatch({type: 'UP'});
        },
        down() {
            this.store.dispatch({type: 'DOWN'});
        }
    }
});
