import { StyleSheet } from 'react-native'
import Fonts from 'app/theme/Fonts'
import ApplicationStyles from 'app/theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    margin: 30,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
})
