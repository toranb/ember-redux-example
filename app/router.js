import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', { path: '/' });
  this.route('dashboard', { path: '/dashboard' });
  this.route('empty', { path: '/empty' });
});

export default Router;
