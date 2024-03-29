import { takeLatest } from 'redux-saga/effects'
import { ExampleTypes } from 'app/stores/Example/Actions'
import { StartupTypes } from 'app/stores/Startup/Actions'
import { fetchTemperature } from './ExampleSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield [
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchTemperature()` when a `FETCH_TEMPERATURE` action is triggered
    takeLatest(ExampleTypes.FETCH_TEMPERATURE, fetchTemperature),
  ]
}
