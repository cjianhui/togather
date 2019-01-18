import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import styles from './SplashScreenStyle'

const logoImageSource = require('../../resources/images/logoPrimary.png')

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} />
        <View style={styles.logo}>
          {/* You will probably want to insert your logo here */}
          <Image source={logoImageSource} />
        </View>
      </View>
    )
  }
}
