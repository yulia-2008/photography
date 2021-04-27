import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../screens/Profile.js';
import Header from '../Header.js';
import React from 'react';

const screens = {
    Profile: {
        screen: Profile,
                // in case if you don't need to render a custom Header component
                // navigationOptions: {
                    // title: "About the App"
                //}

                // rendering a custom Header component with icon
        navigationOptions: ({navigation}) => { 
            return {headerTitle:() => <Header navigation={navigation} title="Profile" />
            }
        }
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