import 'es6-symbol/implement';
import {observable, action, computed} from 'mobx';
import {validate} from 'email-validator'

class AuthStore {
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
