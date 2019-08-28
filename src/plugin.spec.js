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

    context('when the form is not valid', () => {
      context('when the username is empty', () => {
        const connection = {
          x509Username: ''
        };
        const component = mount(
          <X509 currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="x509-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });

      context('when the username is null', () => {
        const connection = {
          x509Username: null
        };
        const component = mount(
          <X509 currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="x509-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });

      context('when the username is undefined', () => {
        const connection = {};
        const component = mount(
          <X509 currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="x509-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });
    });
  });
});
