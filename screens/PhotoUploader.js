import React, {useState, useEffect} from 'react';
import {View, Button, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
// import  * as ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoUploader() {

    const [text, setText] = useState("about");
    const [image, setImage] = useState(null);

    const changeHandler = newText => {
        setText(newText)
    }

    // const selectImage = () => {
    //     let options = {
    //         title: 'Select Image',
    //         maxWidth: 256,
    //         maxHeight: 256,
    //       storageOptions: {
    //         skipBackup: true,
    //         path: 'images',
    //       },
    //     };
    
        // ImagePicker.showImagePicker(options, res => {
        //   console.log('RES==', res);
    
        //   if (res.didCancel) {
        //     console.log('User cancelled photo picker');
        //     Alert.alert('You did not select any image'); 
        //   }     
        //    else if (res.error) {
        //     console.log('ImagePicker Error: ', response.error);
        //   } 
        //   else if (res.customButton) {
    //         console.log('User tapped custom button: ', res.customButton);
    //       } 
    //       else {
    //         let source = { uri: response.uri };
    //     console.log({ source });
    //       }
    //     })       
    // };
    
//   let cameraLaunch = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     console.log("Heyy")
//     ImagePicker.launchImageLibrary(options, (res) => {
//        console.log('Response = ', res);

    //   if (res.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (res.error) {
    //     console.log('ImagePicker Error: ', res.error);
    //   } else if (res.customButton) {
    //     console.log('User tapped custom button: ', res.customButton);
    //     alert(res.customButton);
    //   } else {
    //     const source = { uri: res.uri };
    //     console.log('response', JSON.stringify(res));
        
    //   }
//     });
//   }


const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



    return (
         <View style={styles.container}>
            <Text style = {styles.large}>Photo Description </Text>
            <Text style = {styles.small}>
                Tell users something about this photo,
                when/where/how it was made or story
                what inspired you to take this shot</Text>  
                {/* {console.log(ImagePicker)} */}
            <TextInput
                style={styles.input}
                onChangeText={newText => changeHandler(newText)}
                value={text}
                // placeholder="about photo"
                // keyboardType="text"
                required
                multiline={true} />

            <TouchableOpacity style={styles.button}> 
                <Button title="Pick an image" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </TouchableOpacity>

            <View style={styles.button}  >
                <Button title="Submit" onPress={()=>console.log("submit")} />
                        {/* button can have color prop only, styles dont work with button component, 
                            need to create custom buttom component apply styles for surounded View */}
            </View>
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
    button: {   
        justifyContent: "center",
        alignItems: "center",
    }
    
})
