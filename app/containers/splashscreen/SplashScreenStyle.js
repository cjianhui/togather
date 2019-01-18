import { StyleSheet } from 'react-native'
import Colors from 'app/theme/Colors'
import ApplicationStyles from 'app/theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    width: 500,
  },
})
