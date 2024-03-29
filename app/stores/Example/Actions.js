import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in app/stores/Example/Reducers.js
 * - to trigger sagas, for example in app/sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in app/app.js
 * - in sagas using `yield put(...)`, for example in app/sagas/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  // Fetch the current weather temperature
  fetchTemperature: null,
  // The operation has started and is loading
  fetchTemperatureLoading: null,
  // The temperature was successfully fetched
  fetchTemperatureSuccess: ['temperature'],
  // An error occurred
  fetchTemperatureFailure: ['errorMessage'],
})

export const ExampleTypes = Types
export default Creators
