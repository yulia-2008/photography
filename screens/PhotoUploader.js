import React, {useState, useEffect} from 'react';
import {View, ScrollView, Button, Image, Text, TextInput, FlatList,
        TouchableOpacity, StyleSheet,
        Keyboard, TouchableWithoutFeedback} from "react-native";      
import { AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

export default function PhotoUploader({navigation}) {

    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [textError, setTextError] = useState(null);
    const [imageError, setImageError] = useState(null);
    const [categoryError, setCategoryError] = useState(null);  

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
        newText.trim() !== "" ?   // on input change changing error message
            setTextError("") 
            : 
            setTextError("Fill in a description field!") 
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
        setImage(result.uri),
        setImageError(null)
        }
        
    }

    const submitHandler = () => {
    // 1. Creating Picture instance in DB (post to .../photos)
    // 2. Attaching an image to the Picture instance (post to .../upload_image)
    // 3. Set error messages if fetch failed
        
    if (text.trim() !== ""  && image !== null && category !== ""){
        let newPhotoId;
        let formData = new FormData()
        formData.append("image",  { uri: image, name: 'image.jpg', type: 'image/jpeg' })
 
        let createOptions = { 
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({
                            photo: {category: category,
                                    votes: 0,
                                    user_id: 2,
                                    description: text,
                                   }
                        })
        }
        fetch('https://photoap-backend.herokuapp.com/photos', createOptions)
        .then(response => response.json())
        .then(resp => { console.log(".../photos", resp), 
                        newPhotoId=resp.photo.id, 
                        uploadImg(newPhotoId, formData),                      
                        navigation.navigate('About')

        })
    }
    else {
        text.trim() === "" ? setTextError("Fill in a description field!") : setTextError("")
        // trim() removes whitespace from both sides of a string
        image === null ? setImageError("Image was not picked!") : setImageError(null)
        category === "" ? setCategoryError("Category was not selected!") : setCategoryError("")
    }
    }

    const uploadImg = (newPhotoId, formData) => {  
        let uploadOptions = { 
                        method: 'POST',          
                        headers: {
                            "Content-Type": "multipart/form-data",
                            // make sure content-type is right
                            Accept: 'application/json'
                            },
                        body:  formData
        }
        fetch(`https://photoap-backend.herokuapp.com/photos/${newPhotoId}/upload_image`, uploadOptions)
        .then(response => response.json())
        .then(response => console.log("../upload_image", response)
        ) 
    }                   
    
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()} }>
        <ScrollView style={styles.container}>
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
                                    onPress={()=> {setImage(null), setImageError("Image was not picked!")}} />
                    </View>
                </View>
                : 
                null
            }

            <Text style = {styles.large}>Add a description. </Text>            
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
                <TouchableOpacity   style={category && category === item.name ?
                                                [styles.category, {backgroundColor: "grey"}]
                                                : 
                                                [styles.category, {backgroundColor: "silver"}]
                                            }   
                                    onPress={() => {setCategory(item.name), setCategoryError("")}} > 
                    <Text>{item.name}</Text>
                </TouchableOpacity>                        
            }          
        />
            <Text style={{color:"red"}}>{textError}</Text> 
            <Text style={{color:"red"}}>{categoryError}</Text> 
            <Text style={{color:"red"}}>{imageError}</Text> 
            <View style={styles.button}>
                <Button title="Submit" onPress={submitHandler} />
                        {/* button can have color prop only, styles dont work with button component, 
                            need to create custom buttom component or apply styles for surounded View */}
            </View>
        </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        // justifyContent: "center",
        // alignItems: "center",
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
        alignSelf: "center", 
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
        height: 200, 
        alignSelf: "center", 
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
    }
    
})
