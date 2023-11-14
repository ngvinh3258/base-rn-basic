import React from 'react';

import {StatusBar, useColorScheme} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import store from '@/store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from '@/navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <StoreProvider store={store}>
      <SafeAreaProvider style={backgroundStyle}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <Navigation />
      </SafeAreaProvider>
    </StoreProvider>
  );
}

export default App;
