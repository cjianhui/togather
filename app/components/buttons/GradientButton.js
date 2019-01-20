import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { MKButton } from 'react-native-material-kit'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../theme/index'
import { boldFont } from '../../theme/Fonts'

const styles = StyleSheet.create({
  text: {
    ...boldFont(14),
  },
  linearGradient: {
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    letterSpacing: 1.5,
    lineHeight: 20,
    ...boldFont(14),
  },
})

const styleStore = {
  primary: {
    active: {
      buttonBackgroundColor: Colors.white,
      titleColor: Colors.black,
      borderColor: Colors.greyDark,
    },
    passive: {
      buttonBackgroundColor: Colors.transparent,
      titleColor: Colors.black,
    },
    disabled: {
      buttonBackgroundColor: Colors.greyLight,
      titleColor: Colors.greyDark,
    },
  },
  secondary: {
    active: {
      buttonBackgroundColor: Colors.white,
      titleColor: Colors.black,
      borderColor: Colors.greyDark,
    },
    passive: {
      buttonBackgroundColor: Colors.white,
      titleColor: Colors.black,
      borderColor: Colors.dandelion,
    },
    disabled: {
      buttonBackgroundColor: Colors.greyLight,
      titleColor: Colors.greyDark,
    },
  },
}

const mapTypeToStrings = {
  primary: 'primary',
  secondary: 'secondary',
  active: 'active',
  passive: 'passive',
  disabled: 'disabled',
}

const getStyleStoreForButtonType = (primary, secondary) => {
  let buttonTypeStyleStore = styleStore[mapTypeToStrings.primary]
  if (secondary) {
    buttonTypeStyleStore = styleStore[mapTypeToStrings.secondary]
  }

  return buttonTypeStyleStore
}

const getButtonStyleForState = (styleStoreForType, active, passive, disabled) => {
  let buttonStateStyle
  if (active) {
    buttonStateStyle = styleStoreForType[mapTypeToStrings.active]
  } else if (passive && !disabled) {
    buttonStateStyle = styleStoreForType[mapTypeToStrings.passive]
  } else if (disabled) {
    buttonStateStyle = styleStoreForType[mapTypeToStrings.disabled]
  }
  return buttonStateStyle
}

const getButtonContent = (primary, active, passive, disabled, textStyle, title) => {
  const baseContent = <Text style={textStyle}>{title.toUpperCase()}</Text>

  let buttonContent = baseContent

  if (primary) {
    if (passive && !active && !disabled) {
      buttonContent = (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[Colors.dandelionDark, Colors.dandelion]}
          style={[styles.linearGradient]}
        >
          {baseContent}
        </LinearGradient>
      )
    }
  }

  return buttonContent
}

class RoundButton extends React.Component {
  render() {
    const {
      title,
      primary,
      secondary,
      active,
      passive,
      disabled,
      onPress,
      visible = true,
      style,
    } = this.props

    const type = getStyleStoreForButtonType(primary, secondary)
    const buttonStyle = getButtonStyleForState(type, active, passive, disabled)
    const textStyle = [
      styles.text,
      {
        color: buttonStyle.titleColor,
        letterSpacing: 1.5,
        lineHeight: 20,
      },
    ]

    const buttonContent = getButtonContent(primary, active, passive, disabled, textStyle, title)

    const customStyle =
      primary && passive && !active && !disabled
        ? {
            borderRadius: 22,
            borderColor: buttonStyle.borderColor,
            borderWidth: buttonStyle.borderColor ? 1 : 0,
          }
        : {
            borderRadius: 22,
            borderColor: buttonStyle.borderColor,
            borderWidth: buttonStyle.borderColor ? 1 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }

    const Button = visible ? (
      <MKButton
        backgroundColor={buttonStyle.buttonBackgroundColor}
        onPress={disabled ? null : onPress}
        style={[style, customStyle]}
      >
        {buttonContent}
      </MKButton>
    ) : null
    return Button
  }
}

RoundButton.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  active: PropTypes.bool,
  passive: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  visible: PropTypes.bool,
}

module.exports = RoundButton
