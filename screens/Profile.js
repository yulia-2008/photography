import React from 'react';
import {Text, Button, View, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'

export default function Profile({navigation}) {

    const logoutHandler = () => {
        
        AsyncStorage.removeItem("JWT") 
        AsyncStorage.removeItem("currentUser") 
        navigation.navigate('About')
        console.log("removed")
        
    }


        return (                 
            <View>
                <Button title="Logout" onPress={ logoutHandler} />
                     {/* button can have color prop only, styles dont work with button component, 
                        need to create custom buttom component or apply styles for surounded View */}                  
            </View>
               
        );
}


