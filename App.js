import React from 'react';
import 'es6-symbol/implement';
import './src/initFb';
import AppNavigator from './src/components/screens/app-navigation';
import {Provider, observer} from 'mobx-react';
import stores from './src/stores';

@observer
export default class App extends React.Component {
  render() {
    return (
       <Provider {...stores}>
          <AppNavigator ref={stores.navigation.setNavRef} />
       </Provider>
    );
  }
}
