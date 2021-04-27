import GalleryStack from './GalleryStack.js';
import AboutStack from './AboutStack.js';
import UploaderStack from './UploaderStack.js';
import LoginStack from './LoginStack.js';
import ProfileStack from './ProfileStack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage'


// const [currentUser, setCurrentUser] = useState(null);
// useEffect(() => {getCurrentUser()}, [])

// const getCurrentUser = async () =>  {
//     await AsyncStorage.getItem('currentUser')
//     .then(resp => JSON.parse(resp))
//     .then(resp => {console.log("hey",currentUser);return resp
//     })  
//   }
// const currentUser = getCurrentUser()

const styleOptions = {
    drawerBackgroundColor: 'white',
    drawerWidth: 150
}
// jj

const screens = {
    About: {
        screen: AboutStack
    },
    "Photo Gallery": {
        screen: GalleryStack  
    },
    "Add Photo" : {
        screen: UploaderStack
    }, 
    Login : {
        screen: LoginStack
    },
    // Login : {
    //     // screen: currentUser ?  ProfileStack : LoginStack     
    // }
}
const RootDrawerNavigator = createDrawerNavigator(screens, styleOptions)

export default createAppContainer(RootDrawerNavigator)
