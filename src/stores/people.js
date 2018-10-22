import {observable, computed, action} from 'mobx';
import firebase from 'firebase';
import {entitiesFromFB} from './utils';
import BasicStore from './BasicStore';

class People extends BasicStore {
  @observable loading = false;
  @observable loaded = false;
  @observable entities = {};

  @computed get list() {
       return Object.values(this.entities);
  }
  @computed get length() {
       return Object.keys(this.entities).length;
  }

  @action loadAll() {
       this.loading = true;
        firebase.database().ref('people')
           .once('value', data => {
               this.entities = entitiesFromFB(data.val());
               console.log('people loaed', this.entities);
               this.loading = false;
           });
   }
}

export default People;
