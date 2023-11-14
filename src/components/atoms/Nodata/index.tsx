import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface INodataProps {
  message?: string;
}
const Nodata = ({message}: INodataProps) => {
  return (
    <View style={styles.noDataContainer}>
      <Text>{message || 'Khong co gi o day ca'}</Text>
    </View>
  );
};
export default Nodata;

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
