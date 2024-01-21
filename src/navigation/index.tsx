//import liraries
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigator} from './app.navigator';
import {NavigationContainer} from '@react-navigation/native';

const Navigation = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
