import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ClipboardSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
    >
      <Path id="a" fill={props.fillColor ? props.fillColor : ''} d="M19 4h-4.18C14.4 2.84 13.3 2 12 2c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V8h10v2z" />
    </Svg>
  );

ClipboardSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = ClipboardSvg;

