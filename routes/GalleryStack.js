import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../screens/Categories.js';
import Photos from '../screens/Photos.js';
import PhotoDetails from '../screens/PhotoDetails.js';
import Header from '../components/Header.js';

export default function GalleryStack({ navigation }) {
    const Stack = createStackNavigator();
    
    return (           
        <Stack.Navigator initialRouteName="Categories">          
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    headerTitle: () => <Header navigation={navigation} title="Categories" />,
                    headerStyle: {                   
                        backgroundColor: "silver", // Set Header color
                        height: 60             
                    }            
                }}
                    // the value of options is an object
                    // {key - headerTitle, value - the function that returns Header Component}
            /> 
            <Stack.Screen
                name="Photos"
                component={Photos}
                options={ 
                    ({route}) =>({ 
                        title: route.params.category.name,    // category is a prop comes from Categories.js onPress 
                        headerStyle: {
                            backgroundColor: "silver", 
                            height: 60
                        } 
                    })
                } /> 
            <Stack.Screen
                name="PhotoDetails"
                component={PhotoDetails}
                options={ 
                    ({route}) =>({ 
                        title: `Back to ${route.params.photos.category} category`,  // photoObj prop comes from Photos.js onPress 
                         
                        headerStyle: {
                            backgroundColor: "silver", 
                            height: 60
                        } 
                    })
                } /> 

{/* In React Navigation 5.x, the navigation prop split into 2 props: navigation, route
No more getParam() method, it's equivalent to: route.params      */}
           
        </Stack.Navigator>
    );
  }