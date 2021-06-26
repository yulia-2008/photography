import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About.js';
import Header from '../components/Header.js';


export default function AboutStack({ navigation }) {
    const Stack = createStackNavigator();
    
    return (           
        <Stack.Navigator initialRouteName="About">          
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerTitle:() => <Header navigation={navigation} title="About the App" />,
                    headerStyle: {                   
                        backgroundColor: "silver", //Set Header color
                        height: 60            
                    }            
                }}
            />
        </Stack.Navigator>
    );
  }
  