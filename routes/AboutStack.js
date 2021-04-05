import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About.js';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            // screen title in the header
            title: "About the App"
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