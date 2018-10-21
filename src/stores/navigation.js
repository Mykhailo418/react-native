import {NavigationActions, StackActions} from 'react-navigation';
import BasicStore from './BasicStore';

class Navigation extends BasicStore{
  navRef = null

  setNavRef = ref => this.navRef = ref;

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
}

export default Navigation;
