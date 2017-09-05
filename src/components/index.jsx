const React = require('react');
const PropTypes = require('prop-types');
const isEmpty = require('lodash.isempty');
const { FormInput } = require('hadron-react-components');
const { shell } = require('electron');
const Actions = require('../actions');

/**
 * The kerberos auth role component.
 */
class X509 extends React.Component {

  /**
   * Handle the username change.
   *
   * @param {Event} evt - The event.
   */
  onUsernameChanged(evt) {
    Actions.onX509UsernameChanged(evt.target.value);
  }

  /**
   * Get the error for the required username field.
   *
   * @returns {String} The error message.
   */
  getUsernameError() {
    const connection = this.props.currentConnection;
    if (!this.props.isValid && isEmpty(connection.x509_username)) {
      return 'Username is required';
    }
  }

  /**
   * Render the kerberos component.
   *
   * @returns {React.Component} The component.
   */
  render() {
    return (
      <div id="x509-authentication" className="form-group">
        <FormInput
          label="Username"
          name="x509-username"
          error={this.getUsernameError()}
          changeHandler={this.onUsernameChanged.bind(this)}
          value={this.props.currentConnection.x509_username || ''} />
      </div>
    );
  }
}

X509.propTypes = {
  currentConnection: PropTypes.object.isRequired,
  isValid: PropTypes.bool
};

X509.displayName = 'X509';

module.exports = X509;
