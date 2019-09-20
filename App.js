import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/utilities/redux-store';

import AppNavigator from './src/navigation/app-navigator';


export default class app extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAppReady: null
    }

  }

  componentDidMount() {
    console.disableYellowBox = true;
  }
 
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
