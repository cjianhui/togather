import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const PhoneSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 26}
      height={props.height ? props.height : 42}
      viewBox="0 0 26 42"
    >
      <Path fill="#231F20" fill-rule="evenodd" d="M24 6H2V5a3.005 3.005 0 0 1 3-3h16a3.006 3.006 0 0 1 3 3v1zm0 26H2V8h22v24zm0 5a3.005 3.005 0 0 1-3 3H5a3.004 3.004 0 0 1-3-3v-3h22v3zM21 0H5a5 5 0 0 0-5 5v32a5 5 0 0 0 5 5h16a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM11 38h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2z" />
    </Svg>
  );

PhoneSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = PhoneSvg;
