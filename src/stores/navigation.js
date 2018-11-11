import {NavigationActions, StackActions} from 'react-navigation';
import BasicStore from './BasicStore';
import {autorun} from 'mobx'

class Navigation extends BasicStore{
  navRef = null

  setNavRef = ref => {
    this.navRef = ref;
    this.onReady();
  }

  goTo = (routeName, params) => this.navRef.dispatch(NavigationActions.navigate({
      routeName,
      params
  }))

  reset = (routeName) => {
      const action = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
      });
      this.navRef.dispatch(action);
  }

    onReady = () => {
        console.log('-- On Ready');
        let firstRun = true;
        autorun(() => {
            const screen = this.getStore('auth').user ? 'listing' : 'auth';
            if (!firstRun) this.reset(screen);
            firstRun = false;
        })
    }
}

export default Navigation;
