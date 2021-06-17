import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'

export default function SignUp({navigation}) {

    // if variables set to null, it does not go back to null after a user erase the entered data,
    // the type is string now, so confirmation does not match.

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [city, setCity] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [confirmationError, setConfirmationError] = useState(null);
    const [cityError, setCityError] = useState(null);
    const [usernameError, setUsernameError] = useState(null);
    const [jwt, setJWT] = useState(null);
    // const [currentUser, setcurrentUser] = useState(null);
    const [failMessage, setFailMessage] = useState(null);

    const submitHandler = () => {
       // invoke signUpHandler() if all fields are ok
       // set error messages if not
        
        if (password === passwordConfirm
            && password.length !== 0
            && city.length !== 0
            && username.length !== 0
            )
            {signUpHandler()}
        else {
            city.length === 0 ? 
              setCityError("City can not be blank") : null          
            username.length === 0 ? 
              setUsernameError("Username can not be blank") : null 
            password.length === 0 ?
              setPasswordError("Password can not be blank!") : null
            // confirmationError will print upon entering confirmation password
        }

    }

    
    const signUpHandler = () => {
       
    // get token in response
    let options = { method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                    },
                    body: JSON.stringify({
                            user: {
                                username: username,
                                password: password,
                                city: city
                            }
                    })
                   }
        fetch('https://photoap-backend.herokuapp.com/users', options)
        .then(response => response.json())
        .then(resp => { 
            if (resp.jwt) {
                AsyncStorage.setItem("JWT", JSON.stringify(resp.jwt)) 
                AsyncStorage.setItem("currentUser", JSON.stringify(resp.user.username)) 
                navigation.navigate('About')
                setJWT(resp.jwt)
                // setCurrentUser(resp.user.username)

                setFailMessage(null)
               
            }
            else {
                setFailMessage("Failed to create an account")
            }
        })
    }

        return (
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()} }>
            <View style={styles.container}>
                <Text style={styles.padding}>Enter a username</Text>
                <TextInput  style={styles.input}
                            // underlineColorAndroid="transparent"
                            onChangeText={data => {setUsername(data), setUsernameError(null)}}/> 
                <Text style={{color:"red"}}>{usernameError}</Text> 

                <Text style={styles.padding}>Set a password</Text>
                <TextInput  style={styles.input}
                            secureTextEntry={true}
                            onChangeText={data => { setPassword(data),
                                                    setPasswordError(null), // deleting error message after unsecsefful submit (when user enter a password) 
                                                    passwordConfirm === data ?  // if user change password field, after password confirmation field is fill -  confirmation error will be displayed
                                                        setConfirmationError(null)
                                                        : 
                                                        setConfirmationError("Password confirmation must match password.")
                                                    }}/>
                <Text style={{color:"red"}}>{passwordError}</Text> 

                <Text style={styles.padding}>Confirm a Password</Text>
                <TextInput  style={styles.input}
                            secureTextEntry={true}
                            onChangeText={data => { setPasswordConfirm(data),
                                                    password === data ?
                                                        setConfirmationError(null)
                                                        :
                                                        setConfirmationError("Password confirmation must match password.")
                                                    }}/> 
                <Text style={{color:"red"}}>{confirmationError}</Text>            

                <Text style={styles.padding}>City</Text>
                <TextInput  style={styles.input}
                            secureTextEntry={true}
                            onChangeText={data => {setCity(data), setCityError(null)}}/>
                <Text style={{color:"red"}}>{cityError}</Text>           

                <View style={styles.button}>
                    <Button title="Create an account" onPress={submitHandler} />
                     {/* button can have color prop only, styles dont work with button component, 
                        need to create custom buttom component or apply styles for surounded View */}
                </View>
                <Text style={{color: "red"}}>{failMessage}</Text>
                
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
        // marginTop: 15,
        // marginBottom: 20,
        paddingLeft: 7,
        borderWidth: 1,
        borderColor: "silver",
    },
    button: {   
        margin: 20,
        borderWidth: 1,
    },
    padding: {
        paddingTop: 15,
        paddingBottom: 7,
    }
})

