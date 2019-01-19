import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const VerifySvg = props =>
  (
    <Svg
      width={props.width ? props.width : 42}
      height={props.height ? props.height : 34}
      viewBox="0 0 42 34"
    >
      <G fill="none" fill-rule="evenodd">
        <Path fill="#231F20" d="M40 24.5c0 .544-.456.998-1 1H26.284c-.264 0-.522.106-.708.292l-4.95 4.95-4.95-4.95a1.006 1.006 0 0 0-.706-.292H3c-.544-.002-1-.456-1-1V3c0-.544.456-1 1-1h36c.544 0 1 .456 1 1v21.5zM39 0H3a3.006 3.006 0 0 0-3 3v21.5a3.006 3.006 0 0 0 3 3h11.556l5.364 5.364a1.006 1.006 0 0 0 1.414 0l5.364-5.364H39a3.006 3.006 0 0 0 3-3V3a3.006 3.006 0 0 0-3-3zm-9 12.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" mask="url(#b)" />
      </G>

    </Svg>
  );

VerifySvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = VerifySvg;

