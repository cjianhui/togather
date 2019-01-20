import React, { Component } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import { Colors } from '../theme/index'
import { Config } from '../config'
import deviceStorage from '../services/DeviceStorage'
import EventList from '../components/EventList'

const API_URL = Config.API_URL

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const url = `${API_URL}/events`
    deviceStorage.loadJWT().then((token) => {
      axios({
        method: 'get',
        url: url,
        headers: {
          'x-auth': token,
        },
      })
        .then((response) => {
          // console.log(jwtToken)
          // console.log(response.data)
          this.setState({ data: response.data })
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  render() {
    console.log(this.state.data)

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Upcoming Events</Text>
          <EventList data={this.state.data} />
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.findHomesButton}>
            <Text style={styles.findHomesButtonText}>Refresh Events</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: Colors.white,
  },
  scrollView: {
    height: '100%',
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 20,
    color: Colors.gray04,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
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
  findHomesButton: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 16,
    borderRadius: 3,
    backgroundColor: Colors.pink,
  },
  findHomesButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
})
