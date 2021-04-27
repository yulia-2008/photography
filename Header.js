import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { RawButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'


export default function Header({navigation, title}) {

    useEffect(() => {getCurrentUser()})
    const [currentUser, setCurrentUser] = useState(null);

        // Header component takes props "navigation" from StackNavigation.js
        // openDrawer is a built in function.
    const openMenu = () => {navigation.openDrawer()}

    const getCurrentUser = async () =>  {
        await AsyncStorage.getItem('currentUser')
        .then(resp => JSON.parse(resp))
        .then(resp => {setCurrentUser(resp), console.log(resp)
        })  
      }

    return( 
        <View style={styles.header}>
            {/* icon for the menu */}
            <MaterialIcons name="menu" size={28} onPress={openMenu}/>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.align}>
            {currentUser?
                <>               
                <Text style={styles.currentUser}>Welcome</Text>
                <Text style={styles.currentUser}>{currentUser}</Text> 
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
