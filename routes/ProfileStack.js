import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile.js';
import Header from '../components/Header.js';


export default function ProfileStack({ navigation }) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
                headerTitle:() => <Header navigation={navigation} title="Profile" />,
                headerStyle: {                   
                    backgroundColor: "silver", //Set Header color
                    height: 60              
                }            
            }}
          />
        </Stack.Navigator>
    );
  }
