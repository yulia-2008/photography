import React from 'react';
import {View, Button, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import ImagePicker from 'react-native-image-picker';

export default function PhotoUploader() {

    const [text, setText] = React.useState("about");

    const changeHandler = newText => {
        setText(newText)
      }

    const selectImage = () => {
        let options = {
            title: 'Select Image',
            // maxWidth: 256,
            // maxHeight: 256,
            // storageOptions: {
            //     skipBackup: true
            // }
        //     customButtons: [
        //     { 
        //       name: 'customOptionKey', 
        //       title: 'Choose file from Custom Option' 
        //     },
        //   ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
    
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (res.didCancel) {
            console.log('User cancelled photo picker');
            Alert.alert('You did not select any image'); 
          }     
           else if (res.error) {
            console.log('ImagePicker Error: ', response.error);
          } 
          else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
          } 
          else {
            let source = res;
            this.setState({
              resourcePath: source,
            });
          }
        })
    };  

    return (
         <View style={styles.container}>
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
                keyboardType="text"
                required
                multiline={true} />

            <TouchableOpacity onPress={selectImage}> 
                <Text>Pick an image</Text>
            </TouchableOpacity>

            <Button title="Submit"></Button>
                    {/* button can have color prop only, styles dont work with button component, 
                        need to create custom buttom component*/}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    input: {
        height: 70,
        margin: 20,
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
    
})
