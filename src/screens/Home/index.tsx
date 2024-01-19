//import liraries
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTitle from '../../components/CustomTitle';

// create a component
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTitle>Partidas</CustomTitle>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    padding: 24,
  },
});

//make this component available to the app
export default Home;
