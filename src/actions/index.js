const Reflux = require('reflux');

/**
 * The actions for changing x509 values.
 */
const X509Actions = Reflux.createActions([
  'onX509UsernameChanged'
]);

module.exports = X509Actions;
