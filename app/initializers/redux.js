export function initialize() {
    var application = arguments[1] || arguments[0];
    application.inject('component', 'store', 'service:redux');
}

export default {
    name: 'redux',
    initialize: initialize
};
