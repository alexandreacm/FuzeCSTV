import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MatchDetail from '../screens/MatchDetail';
import {theme} from '../styles/theme';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.ui.primary,
        },
        headerTintColor: theme.colors.ui.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name="MatchDetail"
        component={MatchDetail}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};
