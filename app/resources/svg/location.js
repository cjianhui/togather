import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const LocationSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
    >
      <Path id="a" fill={props.fillColor ? props.fillColor : ''} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </Svg>
  );

LocationSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = LocationSvg;

