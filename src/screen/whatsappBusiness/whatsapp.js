import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

const Tab = createMaterialTopTabNavigator();
import Images from './images';
import Videos from './videos'
export default function Whatsapp() {

  const tabBarOptions={

    activeTintColor: '#ffffff',
    inactiveTintColor: '#36A7E7',
    showIcon: true,
    pressColor: '#9BC9E2',
    scrollEnabled: false,
    tabStyle: {
        borderRadius: 30,
        margin: 7,
        justifyContent: 'center',
        alignContent: 'center'
    },
    indicatorStyle: {
        backgroundColor: '#52F26E',
        height: '70%',
        borderRadius: 30,
        marginBottom: 10,
        marginLeft: 9,
        width: '45%',
        
    },
    style: {
        backgroundColor: '#ffffff',
        borderRadius: 36,
        height: 66,
        width: '96%',
        marginLeft:'2%',
        marginTop:5,
        marginBottom:10
    
        
        
    },
    labelStyle: { fontSize: 14,fontWeight:'bold',color:'#000'},
    


}
  
  return (
      <Tab.Navigator
     tabBarOptions={tabBarOptions}
    >
      <Tab.Screen
        name="Feed"
        component={Images}
        options={{ tabBarLabel: 'Images' }}
        
        />
      
      <Tab.Screen
        name="Profile"
        component={Videos}
        options={{ tabBarLabel: 'Videos' }}
      />
    </Tab.Navigator>
  );
}