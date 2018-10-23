import Expo, { AppLoading } from 'expo';
import React, { Component } from 'react';

import { App } from './components/app/app.component';

export class Main extends Component {
  state = { appReady: false };

  componentDidMount() {
    this.setState({ appReady: true });
  }

  render() {
    const { appReady } = this.state;

    if (!appReady) return <AppLoading />;

    return <App />;
  }
}

Expo.registerRootComponent(Main);
