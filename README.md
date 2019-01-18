# Togather

This project is a [React Native](https://facebook.github.io/react-native/) mobile application that encourages interaction between people when they meet up.

## Content

Bootstrapped with [thecodingmachine's](https://github.com/thecodingmachine/react-native-boilerplate) react-native boilerplate.
Libraries used:

- a [React Native](https://facebook.github.io/react-native/) (v0.57.8) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v3.7) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v5.9) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v5.0) to separate side-effects and logic from state and UI logic
- [React Navigation](https://reactnavigation.org/) (v2.12) with a [`NavigationService`](app/services/NavigationService.js) to handle routing and navigation in the app, with a splash screen setup by default
- [reduxsauce](https://github.com/infinitered/reduxsauce) (v0.7) to facilitate using Redux
- [apisauce](https://github.com/infinitered/apisauce) (v0.15) to make [axios](https://github.com/axios/axios) even better
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

## Directory layout

- [`App/Components`](app/components): presentational components
- [`App/Config`](app/config): configuration of the application
- [`App/Containers`](app/containers): container components, i.e. the application's screens
- [`App/Images`](app/resources/images): images used by the application
- [`App/Sagas`](app/sagas): redux sagas
- [`App/Services`](app/services): application services, e.g. API clients
- [`App/Stores`](app/stores): redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Theme`](app/theme): base styles for the application

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- create your [configuration file `App/Config/index.js`](app/config) from `index.dev.js` (in you are in dev environment) and fill the missing values
- `react-native run-android` to run the Android application (remember to start a simulator or connect an Android phone)
- `react-native run-ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## License

This project is released under the [MIT License](LICENSE).
