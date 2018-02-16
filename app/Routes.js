import { StackNavigator } from 'react-navigation'

import Login from './Screens/Login/Login'
import Home from './Screens/Home/Home'
import Tos from './Screens/Tos/Tos'

const NavigationRoutes = {
    Login: { screen: Login },
    Home: { screen: Home }
};

export const RootStack = StackNavigator(NavigationRoutes);

export default ModalStack = StackNavigator(
    {
        RootStack: { screen: RootStack },
        Tos: { screen: Tos }
    },
    {
        mode: "modal",
        navigationOptions: {
            header: null
        }
    }
);