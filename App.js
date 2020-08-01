import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import ShowResultScreen from "./src/screens/ShowResultScreen";

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ShowResult: ShowResultScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search',
            headerTitleAlign: 'center'
        },
    }
);

export default createAppContainer(navigator);
