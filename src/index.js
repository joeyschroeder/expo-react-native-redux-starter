import { registerRootComponent } from 'expo';
import React, { useState, useEffect, useCallback } from 'react';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { configureStore } from './util/configure-store/configure-store';
import * as SplashScreen from 'expo-splash-screen';

const store = configureStore();

// Makes the native splash screen remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

export function Main() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function loadAssets() {
      // Load any fonts, images, assets, and/or make any asynchronous requests
      // before the Splash Screen is hidden
      setAppReady(true);
    }

    loadAssets();
  }, []);

  const onLayout = useCallback(async () => {
    if (appReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) return null;

  return (
    <Provider store={store}>
      <App onLayout={onLayout} />
    </Provider>
  );
}

registerRootComponent(Main);
