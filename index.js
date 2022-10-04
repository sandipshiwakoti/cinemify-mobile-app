import React from 'react';
import {AppRegistry} from 'react-native';
import {SSRProvider} from '@react-aria/ssr';
import {NativeBaseProvider} from 'native-base';
import {name as appName} from './app.json';
import Router from './src/navigation/Router';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <SSRProvider>
            <NativeBaseProvider>
              <Router />
            </NativeBaseProvider>
          </SSRProvider>
        </QueryClientProvider>
      </PersistGate>
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
