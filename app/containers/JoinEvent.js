import React, { Component } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import { Colors } from '../theme/index'
import { Config } from '../config'
import deviceStorage from '../services/DeviceStorage'
import EventList from '../components/EventList'
import InputField from '../components/form/InputField'
import Notification from '../components/Notification'

const API_URL = Config.API_URL

export default class JoinEvent extends Component {
  constructor() {
    super()

    this.state = {
      code: '',
      eventId: null,
      eventValid: true
    }
  }


  handleJoinEvent = () => {
    const url = `${API_URL}/events/join`
    deviceStorage.loadJWT().then((token) => {
      axios({
        method: 'post',
        url: url,
        data: {
          room_key: this.state.code
        },
        headers: {
          'x-auth': token,
        },
      })
        .then((response) => {
          // console.log(jwtToken)
          // console.log(response.data)
          this.setState({ eventId: response.data['event_id'], eventValid: true })
        })
        .catch((error) => {
          this.setState({ eventValid: false })
          console.log(error)
        })
    })
  }

  handleCodeChange = (code) => {
    console.log(code.toUpperCase())
    this.setState({ code: code.toUpperCase() });
  }

  handleCloseNotification = () => {
    this.setState({ eventValid: true });
  }

  render() {
    const {
      eventValid,
      eventId
    } = this.state;
    const showNotification = !eventValid;
    const showSuccess = !!eventId;
    const notificationMarginTop = showNotification ? 10 : 0;

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Enter Event Code</Text>
          <InputField
            textColor={Colors.text}
            borderBottomColor={Colors.text}
            inputType="text"
            customStyle={{ marginBottom: 20 }}
            onChangeText={this.handleCodeChange}
            autoFocus
            autoCapitalize="characters"
          />
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.joinEventButton} onPress={this.handleJoinEvent}>
            <Text style={styles.joinEventButtonText} >Join Event</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            firstLine="An error occurred while joining the event."
            secondLine="Please try again."
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    height: '100%',
  },
  heading: {
    display: 'flex',
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 20,
    color: Colors.gray04,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.gray04,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.gray05,
    paddingLeft: 20,
    paddingRight: 20,
  },
  joinEventButton: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 16,
    borderRadius: 3,
    backgroundColor: Colors.pink,
  },
  joinEventButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
})
