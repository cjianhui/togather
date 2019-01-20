import axios from 'axios'
import { Config } from '../config/index'
import deviceStorage from '../services/DeviceStorage'
// Environment constants

const API_URL = Config.API_URL
/* (
// API param constants
const ROLE = 'deliverer'
const BEE_SCHEDULES_FILTER = 'bee_schedules'
*/

export const loginAPI = (email, password) => {
  const url = `${API_URL}/users/login`
  return axios
    .post(url, {
      email: email,
      password: password,
    })
    .then((response) => {
      deviceStorage.saveKey('id_token', response.headers['x-auth'])
      console.log(response.headers['x-auth'])
    })
    .catch((error) => {
      console.log(error)
    })
}

export const signupUserAPI = async (email, password, firstName, lastName) => {
  const url = `${API_URL}/users/`
  return axios
    .post(url, {
      lastName: lastName,
      firstName: firstName,
      email: email,
      password: password,
    })
    .then((response) => {
      deviceStorage.saveKey('id_token', response.headers['x-auth'])
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
      return false
    })
}

export const getEventsAPI = async () => {
  const url = `${API_URL}/events/`
  return axios
    .get(url, deviceStorage.loadJWT())
    .then((response) => {
      deviceStorage.saveKey('id_token', response.headers['x-auth'])
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return false
    })
}
