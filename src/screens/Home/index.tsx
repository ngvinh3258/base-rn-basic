import React from 'react';
import {Button, Text, View} from 'react-native';
import {SCREENS} from '../../constants/screen.const';
import {useAppSelector} from '../../hooks';
import Nodata from '@/components/atoms/Nodata';

const HomeScreen = ({navigation}: any) => {
  const user = useAppSelector(state => state.user);
  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>
      {user.userName.length ? (
        <Text>{user.userName}</Text>
      ) : (
        <Nodata message="" />
      )}
      <Button
        onPress={() => navigation.navigate(SCREENS.SETTING)}
        title="TO SETTING"></Button>
    </View>
  );
};
export default HomeScreen;
