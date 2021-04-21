import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login.js';
import SignUp from '../screens/SignUp.js';
import Header from '../Header.js';
import React from 'react';

const screens = {
    Login: {
        screen: Login,
                // in case if you don't need to render a custom Header component
                // navigationOptions: {
                    // title: "Login"
                //}

                // rendering a custom Header component with icon
        navigationOptions: ({navigation}) => { 
            return {headerTitle:() => <Header navigation={navigation} title="Login" />
            }
        }
    },
    "Sign Up": {
        screen: SignUp
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        // header text color
        headerTintColor: "Black",
        headerStyle:{backgroundColor: "silver", height: 60}
    }
})

export default AboutStack;