import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native";

export default function About({navigation}) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const loginHandler = event => {
        // console.log(event)
        // event.preventDefault()
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
            .then(resp =>{console.log("hey", resp)
                // if (resp.user) {
                 //     localStorage.setItem("token", resp.jwt) 
                 //     this.setState({currentUser: resp.user,
                 //                   failMessage: ""
                //                   }, ()=> this.props.history.push('/')
                 //                   )
                 // }
                 // else { this.setState({failMessage: resp})
                 // }
             })
    }

    // const usernameHandler = (data) => {
    //     setUsername(data)
    // }
    // const passwordHandler = (data) => {
    //     setPassword(data)
    // }
        

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
                    <Button title="Login" onPress={event => loginHandler(event)} />
                     {/* button can have color prop only, styles dont work with button component, 
                        need to create custom buttom component or apply styles for surounded View */}
                </View>

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
    },
    button: { 
        width: "50%", 
        marginTop: 10, 
        marginBottom: 35,
        borderWidth: 1,
    },
})

