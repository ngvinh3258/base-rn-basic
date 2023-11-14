import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../../constants/screen.const';
import HomeScreen from '../../screens/Home';
import Setting from '../../screens/Setting';
import AuthScreen from '../../screens/Auth';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      initialRouteName={SCREENS.HOME}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREENS.AUTH} component={AuthScreen} />
      <Stack.Screen name={SCREENS.SETTING} component={Setting} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
