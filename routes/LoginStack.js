import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login.js';
import SignUp from '../screens/SignUp.js';
import Header from '../Header.js';
import React from 'react';

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
                    height: 60,
                    headerTintColor: "Black",  //Set Header text color               
                }            
            }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
            options={{
                headerTitle:() => <Header navigation={navigation} title="Sign Up" />,
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
