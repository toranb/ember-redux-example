import Ember from 'ember';

const { computed, defineProperty } = Ember;

//TODO: actually use the wrapped component to pull in actions
var connect = function(mapStateToComputed, mapDispatchToActions) {
    return function wrapWithConnect(WrappedComponent) { // jshint ignore:line
        var mapState = function(state) {
            var props = [];
            Object.keys(mapStateToComputed(state)).forEach(function(key) {
                props.push(key);
            });
            return props;
        };
        var mapDispatch= function(dispatch) {
            var actions = [];
            Object.keys(mapDispatchToActions(dispatch)).forEach(function(key) {
                actions.push(key);
            });
            return actions;
        };
        return Ember.Component.extend({
            store: Ember.inject.service('redux'),
            init() {
                this._super(...arguments);
                var model = this;
                model['actions'] = {}; //TODO: prevent loss of actions
                var store = this.get('store');
                var props = mapState(store.getState());
                var dispatch = mapDispatch(store.dispatch);
                props.forEach(function(name) {
                    defineProperty(model, name, computed(function() {
                        return mapStateToComputed(store.getState())[name];
                    }).property());
                });
                dispatch.forEach(function(action) {
                    model['actions'][action] = mapDispatchToActions(store.dispatch)[action];
                });
                store.subscribe(() => {
                    props.forEach(function(name) {
                        model.notifyPropertyChange(name);
                    });
                });
            }
        });
    };
};

export default connect;
