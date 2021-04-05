import StackNavigator from './StackNavigator.js';
import AboutStack from './AboutStack.js';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';


const RootDrawerNavigator = createDrawerNavigator({
    
    About: {
        screen: AboutStack
    },
    Categories: {
        screen: StackNavigator  
    }   
})

export default createAppContainer(RootDrawerNavigator)
