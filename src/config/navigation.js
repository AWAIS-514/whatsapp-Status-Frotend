import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';


import MyTabs from './tab'
const Stack = createStackNavigator();

function AppNavigation() {

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });




    return (
      <NavigationContainer>
   <Stack.Navigator


    screenOptions={{
      headerShown: false
    }}>



<Stack.Screen name="MYtabs" component={MyTabs} />

   </Stack.Navigator>
      </NavigationContainer>
    );
  }
  





  export default AppNavigation;