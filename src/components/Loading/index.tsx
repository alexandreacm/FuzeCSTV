//import liraries
import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

// create a component
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.loader} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: 44,
    height: 44,
  },
});

export default Loading;
