import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { RawButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import {UserContext}  from './App.js'


export default function Header({navigation, title}) {
        
    const openMenu = () => {navigation.openDrawer()}
        // Header component takes props "navigation" from StackNavigation.js
        // openDrawer is a built in function.

    const userData = useContext(UserContext);
        // UserContext comes from App.js,
        // It's an object {user: null, authenticate: () => {}}
        // In App.js  return() Provider gives a value to this object
        // value={{user: currentUser, authenticate: loginOrLogout }}
        // I use userData.user to display "Welcome username" 
        

    return( 
        <View style={styles.header}>
            {/* icon for the menu */}
            <MaterialIcons name="menu" size={28} onPress={openMenu}/>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.align}>
            {userData.user?
                <>               
                <Text style={styles.currentUser}>Welcome</Text>
                <Text style={styles.currentUser}>{userData.user}</Text> 
                </>             
                : null
            }
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: "100%",
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        
    },
    align: {
        alignItems: "center", 
    },
    currentUser :{
        color: "green",
        fontSize: 17,
        fontWeight: "bold",
    }
})
