import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import Navigator from './routes/Stack.js'; (if only stack navigator)
import Navigator from './routes/DrawerNavigator.js';

export default function App() {
  return (
    <Navigator/> 
  );
}


