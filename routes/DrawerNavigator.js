import StackNavigator from './StackNavigator.js';
import AboutStack from './AboutStack.js';
import UploaderStack from './UploaderStack.js'
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
    }
})

export default createAppContainer(RootDrawerNavigator)
