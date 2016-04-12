import thunk from 'npm:redux-thunk';

var resolved = thunk.default ? thunk.default : thunk;

var warnz = function({dispatch, getState}) {
  console.warn('wait!');
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
};

export default [resolved, warnz];
