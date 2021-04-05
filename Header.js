import React, { Component } from 'react';
import {View, Text, StyleSheet} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';


export default function Header({navigation, title}) {

        // Header component takes props "navigation" from StackNavigation.js
        // openDrawer is a built in function.
    const openMenu = () => {navigation.openDrawer()}

    return( 
        <View>
            {/* icon for the menu */}
            <MaterialIcons name="menu" size={28} onPress={openMenu}/>
            <Text>{title}</Text>
        </View>
    )
}
