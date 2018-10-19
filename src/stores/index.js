import 'es6-symbol/implement';
import {autorun} from 'mobx';
import AuthStore from './auth';
import EventsStore from './events';
import Navigation from './navigation';

// stores
const auth = new AuthStore();
const events = new EventsStore();
const navigation = new Navigation();
const stores = {auth, events, navigation};

autorun(() => {
    console.log('--', auth.email)
});

export default stores;
