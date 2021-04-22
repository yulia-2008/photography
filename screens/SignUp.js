import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native";

export default function About({navigation}) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [city, setCity] = useState(null);

    const changeHandler = data => {
console.log(data)
    }

        return (
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()} }>
            <View style={styles.container}>
                <Text>Enter a username</Text>
                <TextInput  style={styles.input}
                            // underlineColorAndroid="transparent"
                            onChangeText={data => changeHandler(data)}/>

                <Text>Set a password</Text>
                <TextInput  style={styles.input}
                            secureTextEntry={true}
                            onChangeText={data => changeHandler(data)}/>

                <Text>Confirm a  Password</Text>
                <TextInput  style={styles.input}
                            secureTextEntry={true}
                            onChangeText={data => changeHandler(data)}/>  

                <Text>City</Text>
                <TextInput  style={styles.input}
                            secureTextEntry={true}
                            onChangeText={data => changeHandler(data)}/>          

                <View style={styles.button}>
                    <Button title="Create an account" onPress={()=>console.log("submit")} />
                     {/* button can have color prop only, styles dont work with button component, 
                        need to create custom buttom component or apply styles for surounded View */}
                </View>
                
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
    button: {   
        margin: 20,
        borderWidth: 1,
    },
})

