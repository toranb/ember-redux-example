import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import TimeTravelLog from '../../utilities/time-travel';

var TimeTravelComponent = Ember.Component.extend({
  redux: Ember.inject.service('redux'),
  init: function() {
    this._super(...arguments);
    this.get('redux').subscribe(() => {
      this.notifyPropertyChange('entries');
    });
  },
  entries: Ember.computed(function() {
    return TimeTravelLog.entries;
  }),
  actions: {
      rollback(uuid) {
          var redux = this.get('redux');
          redux.dispatch({type: 'ROLLBACK', uuid: uuid});
      }
  },
  layout: hbs`
    {{#each entries as |entry|}}
      <div class="entry-desc">{{entry.uuid}}</div>
      <button class="btn-rollback" onclick={{action "rollback" entry.uuid}}>rollback</button>
    {{/each}}
  `
});

export default TimeTravelComponent;
