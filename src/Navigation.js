import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';



const AuthStackNavigator = createStackNavigator({
     Login: {
       screen: Login,
     },
     Register: {
      screen: Register,
    },
    Home: {
      screen: Home,
    },
   }, {headerMode: 'none'});

   const SwitchNavigator = createSwitchNavigator(
     {
      AuthLoading: AuthStackNavigator
    },
    {
      initialRouteName: 'AuthLoading',
    });


  const Navigation = createAppContainer(SwitchNavigator);
  export default Navigation;
