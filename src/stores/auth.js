import 'es6-symbol/implement';
import {observable, action, computed} from 'mobx';
import {validate} from 'email-validator';
import BasicStore from './BasicStore';
import firebase from 'firebase';

class AuthStore extends BasicStore {

    constructor(...args){
      super(...args);
      firebase.auth().onAuthStateChanged(user => this.user = user);
    }

    // Observables
    @observable email = '';
    @observable password = '';
    @observable user = null;

    // Actions
    @action changeEmail = (email) => this.email = email;
    @action changePassword = (password) => this.password = password;

    // Computed
    @computed get isValidEmail() {
        return validate(this.email);
    }
}
 export default AuthStore
