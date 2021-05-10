import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoUploader from '../screens/PhotoUploader.js';
import Header from '../Header.js';

export default function UploaderStack({ navigation }) {
    const Stack = createStackNavigator();
    
    return (           
        <Stack.Navigator initialRouteName="Add Photo">          
            <Stack.Screen
                name="Add Photo"
                component={PhotoUploader}
                options={{
                    headerTitle:() => <Header navigation={navigation} title="Add Photo" />,
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