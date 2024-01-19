//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// create a component
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Test</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

//make this component available to the app
export default App;
