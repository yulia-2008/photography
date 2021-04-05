import StackNavigator from './StackNavigator.js';
import AboutStack from './AboutStack.js';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';


const RootDrawerNavigator = createDrawerNavigator({
    StackNavigator: {
        screen: StackNavigator   
    },
    AboutStack: {
        screen: AboutStack
    }
})

export default createAppContainer(RootDrawerNavigator)
