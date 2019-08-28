import Actions from 'actions';

/**
 * Change the x509 username
 *
 * @param {String} username - The username.
 */
function onX509UsernameChanged(username) {
  this.state.currentConnection.x509Username = username;
  this.trigger(this.state);
}

/**
 * When extending the connect plugin, we bind the instance of the store
 * to our functions here, so when our actions are called the changes
 * are happening to the connection model in the connect plugin's store.
 *
 * @param {Store} store - The connect plugin store instance.
 */
function extendAuthentication(store) {
  const username = onX509UsernameChanged.bind(store);

  Actions.onX509UsernameChanged.listen(username);
}

export default extendAuthentication;
