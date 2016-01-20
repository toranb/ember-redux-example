import Ember from 'ember';
import connect from 'ember-redux-example/helpers/connect';

var EmptyThingComponent = Ember.Component.extend();

export default connect()(EmptyThingComponent);
