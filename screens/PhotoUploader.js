import React from 'react';
import {View, Button, Text, TextInput, StyleSheet} from "react-native";

export default function PhotoUploader() {

    const [text, setText] = React.useState("about");

    const changeHandler = newText => {
        setText(newText)
      }

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
