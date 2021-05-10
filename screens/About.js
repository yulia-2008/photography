// import React from 'react';
 import React, {useState, useEffect, createContext, useContext} from 'react';
//  import {UserContext}  from '../App.js'

import {Text, StyleSheet} from "react-native";

export default function About({ navigation }) {
    // const user = useContext(UserContext);
    // useEffect(() => {console.log("about run useEffect"), [user]})

    return (<>

        {/* {console.log("about reload", user.user)} */}
         {/* <Text>USER: {user.user}</Text>  */}
         <Text>About</Text>
      </>
    
      
       
        );
}


