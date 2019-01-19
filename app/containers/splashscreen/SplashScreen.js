import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import styles from './SplashScreenStyle'
import { Images } from '../../theme/index'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} />
        <View style={styles.logo}>
          <Image source={Images.logoPrimary} />
        </View>
      </View>
    )
  }
}
