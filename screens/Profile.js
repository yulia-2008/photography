import React, {useContext} from 'react';
import {Text, Button, View, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext}  from '../App.js'

export default function Profile({navigation}) {
    const userData = useContext(UserContext);
        // UserContext comes from App.js,
        // It's an object {user: null, authenticate: () => {}}
        // In App.js  return() Provider gives a value to this object
        // value={{user: currentUser, authenticate: loginOrLogout }}
        // I use userData.authenticate in logoutHandler after username is removed in AsyncStorage
        // It's invoke loginOrLogout method in app.js which set username state (to null) in App.js

    const logoutHandler = () => {       
        AsyncStorage.removeItem("JWT") 
        AsyncStorage.removeItem("currentUser") 
        navigation.navigate('About')
        userData.authenticate(null)     
    }


        return (               
            <View>
                <Button title="Logout" onPress={ logoutHandler} />
                     {/* button can have color prop only, styles dont work with button component, 
                        need to create custom buttom component or apply styles for surounded View */}                  
            </View>
               
        );
}


