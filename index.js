import { AppRegistry, StatusBar } from 'react-native'
import App from './app/App'

StatusBar.setBarStyle('light-content', true)
AppRegistry.registerComponent('Togather', () => App)
