import StackNavigator from './StackNavigator.js';
import AboutStack from './AboutStack.js';
import UploaderStack from './UploaderStack.js';
import LoginStack from './LoginStack.js';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';


const RootDrawerNavigator = createDrawerNavigator({
    
    About: {
        screen: AboutStack
    },
    "Photo Gallery": {
        screen: StackNavigator  
    },
    "Add Photo" : {
        screen: UploaderStack
    },
    Login : {
        screen: LoginStack
    }
})

export default createAppContainer(RootDrawerNavigator)
