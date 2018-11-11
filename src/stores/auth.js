import 'es6-symbol/implement';
import {observable, action, computed} from 'mobx';
import {validate} from 'email-validator';
import BasicStore from './BasicStore';
import firebase from 'firebase';

class AuthStore extends BasicStore {
    user = null;

    constructor(...args){
      super(...args);
      firebase.auth().onAuthStateChanged(user => {
          const routeName = user ? 'listing' : 'auth';
          this.getStore('navigation').reset(routeName);
      });
    }

    // Observables
    @observable email = '';
    @observable password = '';

    // Actions
    @action changeEmail = (email) => this.email = email;
    @action changePassword = (password) => this.password = password;

    // Computed
    @computed get isValidEmail() {
        return validate(this.email);
    }
}
 export default AuthStore
