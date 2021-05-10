import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from "../screens/Categories.js";
import Photos from "../screens/Photos.js";
import Header from '../Header.js';

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
                        backgroundColor: "silver", //Set Header color
                        height: 60,
                        headerTintColor: "Black",  //Set Header text color               
                    }            
                }}
                    // the value of options is an object
                    // {key - headerTitle, value - the function that returns Header Component}
            />
            <Stack.Screen
                name="Photos"
                component={Photos}
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





// const screens = {
//     Categories: {
//         screen: Categories,
//                 // the value of navigationOptions can be a function.
//                 // It's passing props "navigation" and 'title' to the Header component
//                 // It's returning the Object:  key - headerTitle, value - the function that returns Header Component
//         navigationOptions: ({navigation}) => { 
//             return {headerTitle: () => <Header navigation={navigation} title="Categories" />
//             }
//         }
//     },
//     Landscape: {
//         screen: Photos        
//     },
//     'Street Photo': {
//         screen: Photos        
//     },
//     Portrait: {
//         screen: Photos        
//     },
//     Architecture: {
//         screen: Photos        
//     },
//     'Black & White': {
//         screen: Photos        
//     },
//     Macro: {
//         screen: Photos        
//     },
//     People: {
//         screen: Photos        
//     }

// }

// const StackNavigator = createStackNavigator(screens, {
//     defaultNavigationOptions:{
//         // header text color
//         headerTintColor: "Black",
//         headerStyle:{backgroundColor: "silver", height: 60}
//     }
// });


// export default createAppContainer(StackNavigator);
