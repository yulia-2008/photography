import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GalleryStack from './routes/GalleryStack.js';
import AboutStack from './routes/AboutStack.js';
import UploaderStack from './routes/UploaderStack.js';
import LoginStack from './routes/LoginStack.js';
import ProfileStack from './routes/ProfileStack.js';
import AsyncStorage from '@react-native-community/async-storage';
import userContext from './components/UserContext.js';


export default function App() {
  
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {getCurrentUser(), []})
  //  useEffect(() => {getCurrentUser(), [currentUser]})

  const getCurrentUser = async () =>  {
      await AsyncStorage.getItem('currentUser')
      .then(resp => setCurrentUser(resp) )   
  }
  const Drawer =  createDrawerNavigator();

  const loginOrLogout = data => {   
    setCurrentUser(data);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <userContext.Provider value={{user: currentUser, authenticate: loginOrLogout }}>
          {/* Provider is passing a value to UserContext object for using it in Navigator (in login and Profile container) */}
      
        <NavigationContainer>         
          <Drawer.Navigator initialRouteName="About"
                            drawerStyle={{width: "50%", backgroundColor: 'white'}} >                    
              <Drawer.Screen name="About" component={AboutStack} />
              <Drawer.Screen name="Photo Gallery" component={GalleryStack} />
              {currentUser ?
                <>
                <Drawer.Screen name="Add Photo" component={UploaderStack} /> 
                <Drawer.Screen name="Profile" component={ProfileStack} />
                </>
                :
                <Drawer.Screen name="Login" component={LoginStack} />
              }              
          </Drawer.Navigator>
        </NavigationContainer>
      </userContext.Provider>
      </>
  );
}
