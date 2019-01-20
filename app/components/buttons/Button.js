import React from 'react'
import { StyleSheet } from 'react-native'
import { MKButton } from 'react-native-material-kit'
import PropTypes from 'prop-types'
import { Colors } from '../../theme/index'
import { boldFont } from '../../theme/Fonts'

const mapTypeToStrings = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  active: 'active',
  passive: 'passive',
  disabled: 'disabled',
}

const styleSheet = StyleSheet.create({
  text: {
    ...boldFont(14),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
})

const styleStore = {
  primary: {
    active: {
      buttonBackgroundColor: Colors.primaryRed,
      titleColor: Colors.white,
    },
    passive: {
      buttonBackgroundColor: Colors.secondaryRed,
      titleColor: Colors.white,
    },
    disabled: {
      buttonBackgroundColor: Colors.grey,
      titleColor: Colors.white,
    },
  },
  secondary: {
    active: {
      buttonBackgroundColor: Colors.greyLight,
      titleColor: Colors.activeGreen,
      borderColor: Colors.greyDark,
    },
    passive: {
      buttonBackgroundColor: Colors.white,
      titleColor: Colors.passiveGreen,
      borderColor: Colors.greyDark,
    },
    disabled: {
      buttonBackgroundColor: Colors.white,
      titleColor: Colors.grey,
      borderColor: Colors.greyLight,
    },
  },
  danger: {
    active: {
      buttonBackgroundColor: Colors.greyLight,
      titleColor: Colors.activeRed,
      borderColor: Colors.greyDark,
    },
    passive: {
      buttonBackgroundColor: Colors.white,
      titleColor: Colors.passiveRed,
      borderColor: Colors.greyDark,
    },
    disabled: {
      buttonBackgroundColor: Colors.white,
      titleColor: Colors.grey,
      borderColor: Colors.greyLight,
    },
  },
}

const getStyleStoreForButtonType = (primary, secondary, danger) => {
  let buttonTypeStyleStore = styleStore[mapTypeToStrings.primary]
  if (secondary) {
    buttonTypeStyleStore = styleStore[mapTypeToStrings.secondary]
  } else if (danger) {
    buttonTypeStyleStore = styleStore[mapTypeToStrings.danger]
  }
  return buttonTypeStyleStore
}

const getButtonStyleForState = (styleStoreForType, active, passive, disabled) => {
  let buttonStateStyle = styleStoreForType[mapTypeToStrings.active]
  if (passive) {
    buttonStateStyle = styleStoreForType[mapTypeToStrings.passive]
  } else if (disabled) {
    buttonStateStyle = styleStoreForType[mapTypeToStrings.disabled]
  }
  return buttonStateStyle
}

class Button extends React.Component {
  render() {
    const {
      title,
      primary,
      secondary,
      danger,
      active,
      passive,
      disabled,
      onPress,
      style,
    } = this.props

    const type = getStyleStoreForButtonType(primary, secondary, danger)
    const buttonStyle = getButtonStyleForState(type, active, passive, disabled)
    const textStyle = [styleSheet.text, { color: buttonStyle.titleColor }]

    const PlainFlatButton = MKButton.flatButton()
      .withText(title.toUpperCase())
      .withTextStyle(textStyle)
      .withBackgroundColor(buttonStyle.buttonBackgroundColor)
      .withOnPress(disabled ? null : onPress)
      .withStyle([
        style,
        {
          borderRadius: 4,
          borderColor: buttonStyle.borderColor,
          borderWidth: buttonStyle.borderColor ? StyleSheet.hairlineWidth : 0,
        },
      ])
      .build()

    return <PlainFlatButton />
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  active: PropTypes.bool,
  passive: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}

module.exports = Button
