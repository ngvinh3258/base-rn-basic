import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';

function Navigation() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <AppNavigation />
      </View>
    </NavigationContainer>
  );
}

export default Navigation;
