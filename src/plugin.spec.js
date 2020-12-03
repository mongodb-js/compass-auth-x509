import React from 'react';
import { mount } from 'enzyme';
import X509 from './plugin';

describe('<X509 />', () => {
  describe('#render', () => {
    context('when the form is valid', () => {
      const connection = {
        x509Username: 'user'
      };
      const component = mount(
        <X509 currentConnection={connection} isValid />
      );

      it('renders the wrapper div', () => {
        expect(component.find('.form-group')).to.be.present();
      });

      it('renders the username input', () => {
        expect(component.find('input[name="x509-username"]')).to.have.value('user');
      });
    });
  });
});
