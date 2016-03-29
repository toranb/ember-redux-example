import Ember from 'ember';

var TimeTravelLog = Ember.Object.extend({
    init() {
        this.entries = [];
        this._super(...arguments);
    }
});

var log = TimeTravelLog.create();
//TODO: kill this leaky state

export default log;
