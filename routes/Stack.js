import Categories from "../screens/Categories.js";
import Photos from "../screens/Photos.js";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";


const screens = {
    Categories: {
        screen: Categories
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

const Stack = createStackNavigator(screens);


export default createAppContainer(Stack);
