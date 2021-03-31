import React, { Component } from 'react';
import {Text} from "react-native";

export default function Photos({navigation}) {
        return (           
            <Text> {navigation.getParam('name')}</Text>            
        );
}



