import React from 'react';
import PropTypes from 'prop-types';
import { FormInput } from 'hadron-react-components';
import Actions from 'actions';

/**
 * The kerberos auth role component.
 */
class X509 extends React.Component {
  static displayName = 'X509';

  static propTypes = {
    currentConnection: PropTypes.object.isRequired,
    isValid: PropTypes.bool
  }

  static defaultProps = {
    currentConnection: {}
  }

  /**
   * Handle the username change.
   *
   * @param {Event} evt - The event.
   */
  onUsernameChanged(evt) {
    Actions.onX509UsernameChanged(evt.target.value.trim());
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
          changeHandler={this.onUsernameChanged.bind(this)}
          value={this.props.currentConnection.x509Username || ''} />
      </div>
    );
  }
}

export default X509;
