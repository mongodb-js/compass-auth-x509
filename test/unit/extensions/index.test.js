const Reflux = require('reflux');
const StateMixin = require('reflux-state-mixin');
const { expect } = require('chai');
const Actions = require('../../../lib/actions');
const extension = require('../../../lib/extensions');

describe('Extensions', () => {
  const store = Reflux.createStore({
    mixins: [StateMixin.store],
    getInitialState() {
      return { currentConnection: {}};
    }
  });

  before(() => {
    extension(store);
  });

  describe('#onX509UsernameChanged', () => {
    it('changes the username in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.x509_username).to.equal('test');
        done();
      });
      Actions.onX509UsernameChanged('test');
    });
  });
});
