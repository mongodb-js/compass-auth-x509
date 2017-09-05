const X509 = require('./lib/components');
const extension = require('./lib/extensions');

/**
 * The X509 auth role component.
 */
const X509_AUTH_ROLE = {
  name: 'X509',
  selectOption: { X509: 'X.509' },
  component: X509
};

/**
 * Activate all the components in the X509 plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function activate(appRegistry) {
  appRegistry.registerRole('Connect.AuthenticationMethod', X509_AUTH_ROLE);
  appRegistry.registerRole('Connect.Extension', extension);
}

/**
 * Deactivate all the components in the X509 plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Connect.AuthenticationMethod', X509_AUTH_ROLE);
  appRegistry.deregisterRole('Connect.Extension', extension);
}

module.exports = X509;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
