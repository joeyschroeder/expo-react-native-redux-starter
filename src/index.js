import Expo, { AppLoading } from 'expo';
import React, { Component } from 'react';

import { App } from './components/app/app.component';
import { Provider } from 'react-redux';
import { configureStore } from './util/configure-store/configure-store.util';

const store = configureStore();

export class Main extends Component {
  state = { appReady: false };

  componentDidMount() {
    this.setState({ appReady: true });
  }

  render() {
    const { appReady } = this.state;

    if (!appReady) return <AppLoading />;

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

Expo.registerRootComponent(Main);
