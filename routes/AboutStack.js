import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About.js';

const screens = {
    About: {
        screen: About,
        defaultNavigationOptions: {
            title: "About the app"
        }
    } 
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        // header text color
        headerTintColor: "Black",
        headerStyle:{backgroundColor: "light grey", height: 60}
    }
})

export default AboutStack;