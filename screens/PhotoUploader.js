import React, {useState, useEffect} from 'react';
import {View, Button, Image, Text, TextInput, FlatList,
        StatusBar, TouchableOpacity, StyleSheet,
        Keyboard, TouchableWithoutFeedback} from "react-native";      
import { AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

export default function PhotoUploader() {

    const [text, setText] = useState(null);
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(null);

    const categories = [
        {name: "Landscape",  key: 1},
        {name: "Street Photo", key:2},
        {name: "Portrait",  key: 3},
        {name: "Architecture",  key: 4},
        {name: "Black & White",  key: 5},
        {name: "Macro",  key: 6}, 
        {name: "People",  key:7}
    ]

    const changeHandler = newText => {
        setText(newText)
    }

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
                //  aspect: [4, 3], if allowsEditing: frue (croping image)
            quality: 1,
                // Specify the quality of compression,
                // from 0 to 1. 0 means compress for small size,
                // 1 means compress for maximum quality.
            });

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    
    return (
        <>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()} }>
        <View style={styles.container}>
        <View style={styles.button}> 
            <Button color="grey" title="Pick an image" onPress={selectImage}  />
            </View>
            { image ? 
                <View >
                    <Image source={{ uri: image }} style={styles.image} />
                    <View style={styles.closeIcon}>
                        <AntDesign  name="closesquareo"
                                    size={24}
                                    color="red"
                                    onPress={()=> setImage(null)} />
                    </View>
                </View>
                : null
            }

            <Text style = {styles.large}>Add a description. </Text>
            {/* <Text style = {styles.small}>
                Tell us about the photo, when/where it was taken or
                what inspired you for this shot.</Text>   */}
                
            <TextInput
                style={styles.input}
                onChangeText={newText => changeHandler(newText)}
                value={text}
                placeholder=" Tell us about the photo, when/where it was taken or
                what inspired you for this shot."
                required
                multiline={true} />

        <Text style={styles.large}>Chose a category</Text>
        <FlatList 
            style={{alignSelf: 'center', margin: 7,}}
            data={categories}
            numColumns={2}
            renderItem={ ({item}) =>
                <TouchableOpacity   style={styles.category}  
                                    onPress={() => setCategory(item.name)} > 
                    <Text>{item.name}</Text>
                </TouchableOpacity>                        
            }          
        />

            <View style={styles.button}>
                <Button title="Submit" onPress={()=>console.log("submit")} />
                        {/* button can have color prop only, styles dont work with button component, 
                            need to create custom buttom component or apply styles for surounded View */}
            </View>
        </View>
        </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 70,
        width: "100%",
        marginTop: 10,
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
    },
    large: {
        fontSize: 15,
        fontWeight: "bold",
    },
    // small: {
    //     fontSize: 14,  
    // },
    button: {   
        margin: 20,
        borderWidth: 1,
    },
    image: {
        width: 200,
        height: 200 
    },
    closeIcon: {
        alignSelf: "center",
        marginBottom: 20,    
    },
    category: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "silver",
    }
    
})
