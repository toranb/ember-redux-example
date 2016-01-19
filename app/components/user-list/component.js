import Ember from 'ember';

const { computed, defineProperty } = Ember;

var connect = function(mapStateToComputed, mapDispatchToActions) {
    return function wrapWithConnect(WrappedComponent) {
        return Ember.Component.extend({
            init() {
                var model = this;
                var store = this.store;
                this._super(...arguments);
                store.subscribe(() => {
                    Object.keys(mapStateToComputed(store)).forEach(function(key) {
                        model.notifyPropertyChange(key);
                    });
                });
                Object.keys(mapStateToComputed(store)).forEach(function(key) {
                    defineProperty(model, key, computed(function() {
                        return mapStateToComputed(store.getState())[key];
                    }).property());
                });
                Object.keys(mapDispatchToActions(store)).forEach(function(key) {
                    model['actions'] = {};
                    model['actions'][key] = mapDispatchToActions(store.dispatch)[key];
                });
            }
        });
    }
};

var stateToComputed = (state) => {
    return {
        low: state.low
    }
};

var dispatchToActions = (dispatch) => {
    return {
        up: () => dispatch({type: 'UP'})
    }
};

var UserListComponent = Ember.Component.extend();

export default connect(stateToComputed, dispatchToActions)(UserListComponent);
