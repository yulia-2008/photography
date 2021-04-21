import { createStackNavigator } from 'react-navigation-stack';
import PhotoUploader from '../screens/PhotoUploader.js';
import Header from '../Header.js';
import React from 'react';

const screens = {
    PhotoUploader: {
        screen: PhotoUploader,
                // in case if you don't need to render a custom Header component
                // navigationOptions: {
                    // title: "Photo Uploader"
                //}

                // rendering a custom Header component with icon
        navigationOptions: ({navigation}) => { 
            return {headerTitle:() => <Header navigation={navigation} title="Photo Uploader" />
            }
        }
    } 
}

const UploaderStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        // header text color
        headerTintColor: "Black",
        headerStyle:{backgroundColor: "silver", height: 60}
    }
})

export default UploaderStack;