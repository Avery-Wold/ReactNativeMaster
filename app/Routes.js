import { StackNavigator } from 'react-navigation'

import Login from './Screens/Login/Login'
import Home from './Screens/Home/Home'
import Tos from './Screens/Tos/Tos'
import CharacterList from './Screens/CharacterList/CharacterList'
import AnimatedQuotes from './Screens/Quotes/AnimatedQuotes'

const NavigationRoutes = {
    Login: { screen: Login },
    Home: { screen: Home },
    CharacterList: { screen: CharacterList},
    AnimatedQuotes: { screen: AnimatedQuotes}
};

export const RootStack = StackNavigator(NavigationRoutes);

export default ModalStack = StackNavigator(
    {
        RootStack: { screen: RootStack },
        Tos: { screen: Tos },
    },
    {
        mode: "modal",
        navigationOptions: {
            header: null
        }
    }
);