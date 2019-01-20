import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Images, ApplicationStyles } from '../theme/index';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/Welcome';
import { regularFont } from '../theme/Fonts'
import NavigationService from '../services/NavigationService'

export default class Welcome extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('Login')} location="right" color={Colors.white} text="Log In" />,
    headerStyle: ApplicationStyles.transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: Colors.white,
  });

  constructor(props) {
    super(props);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
  }

  static onFacebookPress() {
    alert('Facebook button pressed');
  }

  handleCreateAccount() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={Images.logoSecondary}
            style={styles.logo}
          />
          <Text style={[styles.welcomeText, regularFont(23)]}>
            Let's get together.
          </Text>
          <RoundedButton
            text="Continue with Facebook"
            textColor={Colors.darkOrange}
            background={Colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            textColor={Colors.white}
            handleOnPress={this.handleCreateAccount}
          />
        </View>
      </ScrollView>
    );
  }
}
