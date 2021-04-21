import React, {useState} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native";

export default function About({navigation}) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const changeHandler = data => {
console.log(data)
    }

        return (
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()} }>
            <View style={styles.container}>
                <Text> Username</Text>
                <TextInput  style={styles.input}
                            // underlineColorAndroid="transparent"
                            onChangeText={data => changeHandler(data)}/>

                <Text> Password</Text>
                <TextInput  style={styles.input}
                            secureTextEntry={true}
                            onChangeText={data => changeHandler(data)}/>

                <Text>Don't have an account?</Text>
                <Text style={styles.signUp}
                      onPress={() => navigation.navigate("Sign Up")}>Sing up</Text> 
                
            </View> 
            </TouchableWithoutFeedback>    
        );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 20,
        width: "50%",
        marginTop: 7,
        marginBottom: 20,
        paddingLeft: 7,
        borderWidth: 1,
        borderColor: "silver",
    },
    signUp: {
        color: "blue"
    }
})

