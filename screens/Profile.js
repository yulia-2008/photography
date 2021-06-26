import React, {useContext} from 'react';
import {Text, Button, View, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import userContext  from '../components/UserContext.js';

export default function Profile({navigation}) {
    const userData = useContext(userContext);
        // userContext is an object {user: null, authenticate: () => {}}
        // In App.js  return() Provider gives a value to this object
        // value={{user: currentUser, authenticate: loginOrLogout }}

    const logoutHandler = () => {       
        AsyncStorage.removeItem("JWT") 
        AsyncStorage.removeItem("currentUser") 
        navigation.navigate('About')
        userData.authenticate(null) 
        // userData.authenticate invoke loginOrLogout() method in App.js which is set currentUser to null    
    }
        return (               
            <View>
                <Button title="Logout" onPress={ logoutHandler} />
                     {/* button can have color prop only, styles dont work with button component, 
                        need to create custom buttom component or apply styles for surounded View */}                  
            </View>             
        );
}


