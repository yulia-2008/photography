import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'

export default function Login({navigation}) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [jwt, setJWT] = useState(null);
    const [failMessage, setFailMessage] = useState(null);

    const loginHandler = () => {
        let options = { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
                },
            body: JSON.stringify({
                user: {username: username,
                      password: password}
                })
            } 

            // 127.0.0.1:3000 - rails server
            // 192.168.1.145:19000 -  Emulator
            // 192.168.1.145  - ip adress of my computer
            // 192.168.1.145:19002  -  Metro server

            // Android emulator and Rails server have different IP
            // => Errors on Fetch to backend ("Network request failed")
            // I changed IP for rails server (in backend: config/puma.rb) for the same as Emulator has, error is gone!
     
            fetch('http://192.168.1.145:3000/login', options)  // got toket in response !
            .then(response => response.json())
            .then(resp => {
                if (resp.jwt) {
                    AsyncStorage.setItem("JWT", JSON.stringify(resp.jwt)) 
                    AsyncStorage.setItem("currentUser", JSON.stringify(resp.user.username)) 
                    navigation.navigate('About')
                    setJWT(resp.jwt)
                    setFailMessage(null)
                }
                else {
                    setFailMessage(resp.message)
                }
            })
    }
      

        return (
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()} }>
            <View style={styles.container}>
                <Text> Username</Text>
                <TextInput  style={styles.input}
                            // underlineColorAndroid="transparent"
                            onChangeText={data => setUsername(data)}/>

                <Text> Password</Text>
                <TextInput  style={styles.input}
                            secureTextEntry={true}
                            onChangeText={data => setPassword(data)}/>

                <View style={styles.button}>
                    <Button title="Login" onPress={ loginHandler} />
                     {/* button can have color prop only, styles dont work with button component, 
                        need to create custom buttom component or apply styles for surounded View */}                  
                </View>
                <Text style={{color: "red"}}>{failMessage}</Text>

                <Text style={{paddingTop: 35}}>Don't have an account?</Text>
                
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
    },
    button: { 
        width: "50%", 
        marginTop: 10, 
        borderWidth: 1,
    },
})

