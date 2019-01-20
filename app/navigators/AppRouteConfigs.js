import { createStackNavigator } from 'react-navigation'
import Welcome from '../containers/Welcome'
import Login from '../containers/Login'
import Signup from '../containers/SignUp'

import LoggedInTabNavigator from './LoggedInTabNavigator'

const AppRouteConfigs = createStackNavigator({
  Welcome: { screen: Welcome },
  LoggedIn: {
    screen: LoggedInTabNavigator,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Login: { screen: Login },
  Signup: { screen: Signup },
})

export default AppRouteConfigs
