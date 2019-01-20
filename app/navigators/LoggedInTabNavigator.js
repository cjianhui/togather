import React from 'react'
import PropTypes from 'prop-types'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../containers/Home'
import JoinEvent from '../containers/JoinEvent'
import CreateEvent from '../containers/CreateEvent'

import { Colors } from '../theme/index'

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => <Icon name={name} size={size} color={tintColor} />

  icon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  }

  return icon
}

const LoggedInTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: CustomTabBarIcon('ios-home', 22),
      },
    },
    JoinEvent: {
      screen: JoinEvent,
      navigationOptions: {
        tabBarLabel: 'JOIN EVENT',
        tabBarIcon: CustomTabBarIcon('ios-people', 22),
      },
    },
    CreateEvent: {
      screen: CreateEvent,
      navigationOptions: {
        tabBarLabel: 'CREATE EVENT',
        tabBarIcon: CustomTabBarIcon('ios-add', 22),
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: '600',
        marginBottom: 5,
      },
      activeTintColor: Colors.pink,
    },
    tabBarPosition: 'bottom',
  }
)

export default LoggedInTabNavigator
