import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login.js';
import SignUp from '../screens/SignUp.js';
import Header from '../components/Header.js';


export default function LoginStack({ navigation }) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
                headerTitle:() => <Header navigation={navigation} title="Login" />,
                headerStyle: {                   
                    backgroundColor: "silver", //Set Header color
                    height: 60             
                }            
            }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
            options={{              
                headerStyle: {                   
                    backgroundColor: "silver", //Set Header color
                    height: 60,
                    headerTintColor: "Black",  //Set Header text color               
                }            
            }}
          />

        </Stack.Navigator>
    );
  }
