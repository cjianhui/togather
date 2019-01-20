import React, { Component } from 'react'
import { DatePicker } from 'react-native-woodpicker'
import axios from 'axios'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import { Colors } from '../theme/index'
import { Config } from '../config'
import deviceStorage from '../services/DeviceStorage'
import InputField from '../components/form/InputField'

const API_URL = Config.API_URL

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      pickedDate: null,
      time: '',
      latitude: null,
      longitude: null,
      duration: null,
    }
  }

  handleTitleChange = (title) => {
    this.setState({ title: title })
  }

  handleDatePicker = data => {
    this.setState({ pickedDate: data });
  };

  handlePlaceholder = () =>
    this.state.pickedDate
      ? this.state.pickedDate.toDateString()
      : "Please select a date";


  render() {
    console.log(this.state.data)

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Create Event</Text>
          <InputField
            labelText="TITLE"
            labelTextSize={14}
            labelColor={Colors.text}
            textColor={Colors.text}
            borderBottomColor={Colors.text}
            inputType="title"
            customStyle={{ marginLeft:20, marginBottom: 15, marginRight:20 }}
            onChangeText={this.handleTitleChange}
            autoFocus
          />
          <Text style={{ marginLeft:20, color: Colors.text, fontSize: 14, fontWeight: 'bold', marginBottom: 15}}>
            DATE
          </Text>
          <View style = {{ marginLeft: 20, borderColor: Colors.text,  borderRadius: 4, borderWidth: 1, marginRight: 20, padding: 10}}>
            <DatePicker
              onDateChange={this.handleDatePicker}
              value={this.state.pickedDate}
              title="Date Picker"
              placeholder={this.handlePlaceholder()}
              //iosPickerMode="date"
              androidPickerMode="spinner"
              //locale="fr"
              //isNullable
            />
          </View>


        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.findHomesButton}>
            <Text style={styles.findHomesButtonText}>Create Event</Text>
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
