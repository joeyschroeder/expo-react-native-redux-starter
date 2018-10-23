import Expo, { AppLoading } from 'expo';
import React, { Component } from 'react';

import { App } from './App';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { appReady: false };
  }

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
