//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

// create a component
const Card = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 176,
    backgroundColor: theme.colors.ui.card,
  },
});

//make this component available to the app
export default Card;
