import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import THEMES from '@/theme';

interface ILoadingWrapper {
  children?: React.ReactNode | null;
  loading?: boolean;
}

const LoadingWrapper = ({children, loading}: ILoadingWrapper) => {
  return (
    <View style={styles.loadingWrapper}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={THEMES.color.red[900]}
          />
        </View>
      ) : (
        children
      )}
    </View>
  );
};

export default LoadingWrapper;

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
