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
      <Text>App</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
