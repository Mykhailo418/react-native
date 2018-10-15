import React from 'react';
import 'es6-symbol/implement';
import AppNavigator from './src/components/screens/app-navigation';
import {Provider} from 'mobx-react';
import stores from './src/stores';
import './src/initFb';

export default class App extends React.Component {
  render() {
    return (
       <Provider {...stores}>
          <AppNavigator />
       </Provider>
    );
  }
}
