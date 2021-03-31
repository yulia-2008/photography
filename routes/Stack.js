import Categories from "../screens/Categories.js";
import Photos from "../screens/Photos.js";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";


const screens = {
    Categories: {
        screen: Categories
    },
    Photos: {
        screen: Photos
    }
}

const Stack = createStackNavigator(screens);


export default createAppContainer(Stack);
