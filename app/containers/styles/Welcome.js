import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/index'

let headingTextSize = 30

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: Colors.darkOrange,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 60,
    padding: 20,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: Colors.white,
    fontWeight: '300',
    marginTop: 40,
    marginBottom: 40,
  },
  facebookButtonIcon: {
    color: Colors.darkOrange,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton: {
    marginTop: 10,
  },
  moreOptionsButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
})

export default styles
