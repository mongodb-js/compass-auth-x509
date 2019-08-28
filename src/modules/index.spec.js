import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
import Actions from 'actions';
import extension from 'modules';

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
        expect(state.currentConnection.x509Username).to.equal('test');
        done();
      });
      Actions.onX509UsernameChanged('test');
    });
  });
});
