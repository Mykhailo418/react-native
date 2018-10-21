import 'es6-symbol/implement';
import AuthStore from './auth';
import EventsStore from './events';
import Navigation from './navigation';

// stores
const stores = {};

Object.assign(stores, {
  auth: new AuthStore(stores),
  events: new EventsStore(stores),
  navigation: new Navigation(stores)
})

export default stores;
