import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Scheduler2Svg = props =>
  (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
    >
      <Path id="a" fill={props.fillColor ? props.fillColor : ''} d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z" />
    </Svg>
  );

Scheduler2Svg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = Scheduler2Svg;
