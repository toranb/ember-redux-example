import Ember from 'ember';
import TimeTravelLog from '../utilities/time-travel';

export default function(combine) {
    return (state, action) => {
        var entries = TimeTravelLog.entries;
        if(action.type === 'ROLLBACK') {
            var index = entries.findIndex((entry) => entry.uuid === action.uuid);
            state = entries[index].state;
            entries.splice(index, entries.length - index);
        }else{
            entries.push({
                uuid: Ember.uuid(),
                action: action,
                state: state
            });
        }
        return combine(state, action);
    };
}
