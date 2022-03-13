

import React from 'react';
import  AppNavigation from './src/config/navigation' 
import { LogBox } from 'react-native';

const App = ({props}) =>  {
  
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (


     <AppNavigation />

   
   
   
   );
};



export default App;
