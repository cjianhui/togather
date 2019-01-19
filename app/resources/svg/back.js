import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const BackSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
    >
      <Path id="a" fill={props.fillColor ? props.fillColor : ''} d="M1.712 11.55H23.5a.5.5 0 1 1 0 1H1.817l7.025 6.585a.5.5 0 1 1-.684.73l-8-7.5a.5.5 0 0 1 0-.73l8-7.5a.5.5 0 0 1 .684.73l-7.13 6.684z" />
    </Svg>
  );

BackSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = BackSvg;

