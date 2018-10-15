import 'es6-symbol/implement';
import {autorun} from 'mobx';
import AuthStore from './auth';

// stores
const auth = new AuthStore();
const stores = {
  auth
};

autorun(() => {
    console.log('--', auth.email)
});

export default stores;
