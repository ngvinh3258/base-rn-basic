import React from 'react';
import {Button, Text, View} from 'react-native';
import {SCREENS} from '../../constants/screen.const';
import THEMES from '@/theme';

const Setting = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Setting</Text>
      </View>
      <Button
        color={THEMES.color.gray[900]}
        onPress={() => navigation.navigate(SCREENS.AUTH)}
        title="TO AUTH"></Button>
    </View>
  );
};
export default Setting;
