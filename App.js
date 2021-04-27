import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
//import Navigator from './routes/Stack.js'; (if only stack navigator)
import Navigator from './routes/DrawerNavigator.js';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GalleryStack from './routes/GalleryStack.js';
import AboutStack from './routes/AboutStack.js';
import UploaderStack from './routes/UploaderStack.js';
import LoginStack from './routes/LoginStack.js';
import ProfileStack from './routes/ProfileStack.js';
import AsyncStorage from '@react-native-community/async-storage'

  // const Drawer =  createDrawerNavigator();
export default function App() {

  const [currentUser, setCurrentUser] = useState("user3");
  // useEffect(() => {getCurrentUser(), []})

  // const getCurrentUser = async () =>  {
  //   console.log("resp", currentUser),
  //     await AsyncStorage.getItem('currentUser')
  //     .then(resp => JSON.parse(resp))
  //     .then(resp => setCurrentUser(resp))  
  // }
  const Drawer =  createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={AboutStack} />
        {currentUser ? 
          <Drawer.Screen name="Profile" component={ProfileStack} />
          :
          <Drawer.Screen name="Login" component={LoginStack} />
        }
        {/* <Drawer.Screen name="Photo Gallery" component={GalleryStack} />
        <Drawer.Screen name="Add Photo" component={UploaderStack} />
         */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


