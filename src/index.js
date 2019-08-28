import X509 from './plugin';
import extension from 'modules';

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
  appRegistry.registerRole('Connect.AuthStrategy', X509_AUTH_ROLE);
  appRegistry.registerRole('Connect.Extension', extension);
}

/**
 * Deactivate all the components in the X509 plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Connect.AuthStrategy', X509_AUTH_ROLE);
  appRegistry.deregisterRole('Connect.Extension', extension);
}

export default X509;
export { activate, deactivate };
