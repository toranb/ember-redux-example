import thunk from 'npm:redux-thunk';

var warnz = function thunkMiddleware({ dispatch, getState }) {
  console.warn('wait!');
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
};

export default [thunk, warnz];
