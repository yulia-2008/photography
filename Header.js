import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { RawButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'


export default function Header({navigation, title}) {

    useEffect(() => {getCurrentUser()}, [])
    const [currentUser, setCurrentUser] = useState(null);

        // Header component takes props "navigation" from StackNavigation.js
        // openDrawer is a built in function.
    const openMenu = () => {navigation.openDrawer()}

    const getCurrentUser = async () =>  {
        await AsyncStorage.getItem('currentUser')
        .then(resp => JSON.parse(resp))
        .then(resp => {setCurrentUser(resp)
        })  
      }

    return( 
        <View style={styles.header}>
            {console.log('currentUser', currentUser)}
            {/* icon for the menu */}
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={styles.welcome}>Welcome {currentUser}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "space-around",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    icon: {
        position: "absolute",
        left: 15,
    },
    welcome: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        // right: 1,

    }

})
