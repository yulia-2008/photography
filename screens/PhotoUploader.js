import React, {useState, useEffect} from 'react';
import {View, Button, Image, Text, TextInput, StatusBar, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function PhotoUploader() {

    const [text, setText] = useState("about");
    const [image, setImage] = useState(null);

    const changeHandler = newText => {
        setText(newText)
    }

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
    //   aspect: [4, 3], if allowsEditing: frue
      quality: 1,
      // Specify the quality of compression,
      // from 0 to 1. 0 means compress for small size,
      // 1 means compress for maximum quality.
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



    return (
        <>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()} }>
         <View style={styles.container}>
             <TouchableOpacity style={styles.button}> 
                <Button title="Pick an image" onPress={pickImage} />
                <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>

            <Text style = {styles.large}>Photo Description </Text>
            <Text style = {styles.small}>
                Tell users something about this photo,
                when/where/how it was made or story
                what inspired you to take this shot</Text>  
                
            <TextInput
                style={styles.input}
                onChangeText={newText => changeHandler(newText)}
                value={text}
                // placeholder="about photo"
                // keyboardType="text"
                required
                multiline={true} />


            <View style={styles.button}  >
                <Button title="Submit" onPress={()=>console.log("submit")} />
                        {/* button can have color prop only, styles dont work with button component, 
                            need to create custom buttom component apply styles for surounded View */}
            </View>
        </View>
        </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    input: {
        height: 70,
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
    },
    large: {
        fontSize: 15,
        fontWeight: "bold",
    },
    small: {
        fontSize: 14,
        
    },
    button: {   
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    image: {
        margin: 20,
        width: 200,
        height: 200 
    }
    
})
