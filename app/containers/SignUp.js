import React, { Component } from 'react';
//import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions';
import { Colors, ApplicationStyles } from '../theme/index';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import NavBarButton from '../components/buttons/NavBarButton'
import styles from './styles/Login';

class Signup extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft: <NavBarButton
      handleButtonPress={() => navigation.goBack()}
      location="left"
      icon={<Icon name="angle-left" color={Colors.white} size={30} />}
    />,
    headerStyle: ApplicationStyles.transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: Colors.white,
  });


  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAddress: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      validPassword: false,
      samePassword: false,
      loadingVisible: false,
    };

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleNextButton() {
    this.setState({ loadingVisible: true });
    const { signup, navigation } = this.props;
    const { navigate } = navigation;

    setTimeout(() => {
      const { emailAddress, password, firstName, lastName } = this.state;
      if (signup(emailAddress, password, firstName, lastName)) {
        this.setState({ formValid: true, loadingVisible: false });
        navigation.popToTop()
      } else {
        this.setState({ formValid: false, loadingVisible: false });
      }
    }, 2000);
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }

  handleEmailChange(email) {
    // eslint-disable-next-line
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validEmail } = this.state;
    this.setState({ emailAddress: email });

    if (!validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else if (!emailCheckRegex.test(email)) {
      this.setState({ validEmail: false });
    }
  }

  handlePasswordChange(password) {
    const { validPassword } = this.state;

    this.setState({ password });

    if (!validPassword) {
      if (password.length > 4) {
        // Password has to be at least 4 characters long
        this.setState({ validPassword: true });
      }
    } else if (password <= 4) {
      this.setState({ validPassword: false });
    }
  }

  handleConfirmPasswordChange(secondPassword) {
    const { confirmPassword, password, samePassword } = this.state;

    this.setState({ secondPassword });

    if (!samePassword) {
      if (password === confirmPassword) {
        this.setState({ samePassword: true });
      }
    } else {
      this.setState({ samePassword: false });
    }
  }

  handleFirstNameChange(firstName) {
    this.setState({ firstName: firstName });
  }

  handleLastNameChange(lastName) {
    this.setState({ lastName: lastName });
  }

  toggleNextButtonState() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }

  render() {
    const {
      formValid, loadingVisible, validEmail, validPassword, samePassword
    } = this.state;
    const showNotification = !formValid;
    const background = formValid ? Colors.darkOrange: Colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding"
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>
              Sign Up
            </Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={Colors.white}
              textColor={Colors.white}
              borderBottomColor={Colors.white}
              inputType="email"
              customStyle={{ marginBottom: 20 }}
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
              autoFocus
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={Colors.white}
              textColor={Colors.white}
              borderBottomColor={Colors.white}
              inputType="password"
              customStyle={{ marginBottom: 20 }}
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
            />
            <InputField
              labelText="CONFIRM PASSWORD"
              labelTextSize={14}
              labelColor={Colors.white}
              textColor={Colors.white}
              borderBottomColor={Colors.white}
              inputType="password"
              customStyle={{ marginBottom: 20 }}
              onChangeText={this.handleConfirmPasswordChange}
              showCheckmark={samePassword}
            />

            <InputField
              labelText="FIRST NAME"
              labelTextSize={14}
              labelColor={Colors.white}
              textColor={Colors.white}
              borderBottomColor={Colors.white}
              inputType="text"
              customStyle={{ marginBottom: 20 }}
              onChangeText={this.handleFirstNameChange}
            />

            <InputField
              labelText="LAST NAME"
              labelTextSize={14}
              labelColor={Colors.white}
              textColor={Colors.white}
              borderBottomColor={Colors.white}
              inputType="text"
              customStyle={{ marginBottom: 20 }}
              onChangeText={this.handleLastNameChange}
            />
          </ScrollView>
          <NextArrowButton
            handleNextButton={this.handleNextButton}
            disabled={this.toggleNextButtonState()}
          />
        </View>
        <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        />
        <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            firstLine="There is an error with your sign up."
            secondLine="Please try again."
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.loggedInStatus,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
