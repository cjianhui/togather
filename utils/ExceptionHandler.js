import showErrorWithMessage from '../actions/ErrorAlertActions';
import { logoutDeliverer } from '../actions/AuthActions';

/**
 * Creates a user exception handled by default handler
 *
 * @param status
 * @param message
 * @returns {{name: string, status: *, message: *, toString(): string}}
 * @constructor
 */
export const Exception = (status, message) => ({
  name: 'Exception',
  status,
  message,
  toString() {
    return `${this.name}: ${this.status} - ${this.message}`;
  }
});

/**
 * Helper util method to generate random
 * integer within specified range
 * @param min
 * @param max
 * @returns {*}
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * Random friendly error message generator
 * @returns {{title: *, description: *}}
 */
const getRandomNoServiceError = () => {
  const titles = [
    Locales.t('error_no_service_title_1'),
    Locales.t('error_no_service_title_2'),
    Locales.t('error_no_service_title_3')
  ];
  const descriptions = [
    Locales.t('error_no_service_message_1'),
    Locales.t('error_no_service_message_2'),
    Locales.t('error_no_service_message_3')
  ];
  const randomValue = getRandomInt(0, 2);
  return { title: titles[randomValue], description: descriptions[randomValue] };
};

/**
 * Default exception handler
 * Handles standard error codes like 401, 500, 503 etc.
 *
 * @param exception
 * @param dispatch
 */
export const exceptionHandler = (exception, dispatch, handle401 = false) => {
  const { status } = exception;
  if (status === 401) {
    if (handle401) {
      // Login failure message
      dispatch(showErrorWithMessage(Locales.t('error_login_message')));
    } else {
      // For unhandled 401 errors, we logout.
      dispatch(logoutDeliverer());
    }
  } else if (status >= 500 && status <= 511) {
    // Randomized no service friendly error
    dispatch(showErrorWithMessage(getRandomNoServiceError()));
  } else {
    // All other errors
    dispatch(showErrorWithMessage(Locales.t('error_cause_unknown')));
  }
};
