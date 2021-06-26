import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

export default function PhotoDetails({route}) {

    const photoObject = route.params.photoObj  
    
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: photoObject.attached_image}} /> 
        <Text style={{textAlign: 'center'}}>Like?</Text>
        <Text style={{textAlign: 'center'}}>Category: {photoObject.category}</Text>
        <Text style={{textAlign: 'center'}}>Descriprion: {photoObject.description}</Text>   
    </View>  
    //  In React Navigation 5.x, the navigation prop split into 2 props: navigation, route
    //  No more getParam() method, it's equivalent to: route.params          
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'             
    },
    image: {
        width: 400,                                      
        height: 300,
        borderWidth: 5,
        borderRadius: 10, 
        borderColor: 'silver'  
    }
  });
