import React, { Component } from 'react';
import {View, Text, StyleSheet} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { RawButton } from 'react-native-gesture-handler';


export default function Header({navigation, title}) {

        // Header component takes props "navigation" from StackNavigation.js
        // openDrawer is a built in function.
    const openMenu = () => {navigation.openDrawer()}

    return( 
        <View style={styles.header}>
            {/* icon for the menu */}
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "center",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    icon:{
        position: "absolute",
        left: 15,
    }

})
