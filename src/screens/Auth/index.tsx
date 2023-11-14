import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {SCREENS} from '../../constants/screen.const';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {setUserName} from '@/store/reducers/user';
import THEMES from '@/theme';

const AuthScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const [name, setName] = useState(user.userName);
  const handleChangeUserName = (value: string) => {
    setName(value);
  };
  const handleMoveToHomeWithName = () => {
    dispatch(setUserName(name));
    navigation.navigate(SCREENS.HOME);
  };
  useEffect(() => {}, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>AuthScreen</Text>
        <TextInput value={name} onChangeText={handleChangeUserName} />
      </View>
      <Button
        color={THEMES.color.red[900]}
        onPress={handleMoveToHomeWithName}
        title="TO HOME(user)"></Button>
    </View>
  );
};
export default AuthScreen;
