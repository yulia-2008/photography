import React from 'react';
import {Text} from "react-native";

export default function Photos({route}) {
    
    return (
    <Text>{route.params.category.name}</Text>            
    );
}



