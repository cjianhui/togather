import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const scaleFontSize = (fontSize) => {
  // All our designs use this as baseline screen size
  // and define font sizes
  const BASELINE_WIDTH = 375
  const ratio = fontSize / BASELINE_WIDTH

  // Scale font size for current screen size
  return Math.round(ratio * width)
}

export const regularFont = (fontSize) => {
  const scaledSize = scaleFontSize(fontSize)
  return { fontFamily: 'Rubik-Regular', fontSize: scaledSize }
}

export const mediumFont = (fontSize) => {
  const scaledSize = scaleFontSize(fontSize)
  return { fontFamily: 'Rubik-Medium', fontSize: scaledSize }
}

export const boldFont = (fontSize) => {
  const scaledSize = scaleFontSize(fontSize)
  return { fontFamily: 'Rubik-Bold', fontSize: scaledSize }
}

export const lightFont = (fontSize) => {
  const scaledSize = scaleFontSize(fontSize)
  return { fontFamily: 'Rubik-Light', fontSize: scaledSize }
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
}

const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
}

export default {
  size,
  style,
}
