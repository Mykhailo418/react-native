import 'es6-symbol/implement';
import AuthStore from './auth';
import EventsStore from './events';
import Navigation from './navigation';
import People from './people';

// stores
const stores = {};
stores.auth = new AuthStore(stores);
stores.events = new EventsStore(stores);
stores.navigation = new Navigation(stores);
stores.people = new People(stores);

export default stores;
