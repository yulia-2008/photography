import Categories from "../screens/Categories.js";
import Photos from "../screens/Photos.js";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Header from '../Header.js';
import React from 'react';


const screens = {
    Categories: {
        screen: Categories,
                // the value of navigationOptions can be a function.
                // It's passing props "navigation" and 'title' to the Header component
                // It's returning the Object:  key - headerTitle, value - the function that returns Header Component
        navigationOptions: ({navigation}) => { 
            return {headerTitle: () => <Header navigation={navigation} title="Categories" />
            }
        }
    },
    Landscape: {
        screen: Photos        
    },
    'Street Photo': {
        screen: Photos        
    },
    Portrait: {
        screen: Photos        
    },
    Architecture: {
        screen: Photos        
    },
    'Black & White': {
        screen: Photos        
    },
    Macro: {
        screen: Photos        
    },
    People: {
        screen: Photos        
    }

}

const StackNavigator = createStackNavigator(screens, {
    defaultNavigationOptions:{
        // header text color
        headerTintColor: "Black",

        headerStyle:{backgroundColor: "silver", height: 60}
    }
});


export default createAppContainer(StackNavigator);
