import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const DropdownSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
    >
      <Path
        id="a"
        fill={props.fillColor ? props.fillColor : ''}
        rotation={props.rotation}
        origin={`${(props.width ? props.width : 24) / 2},${(props.height ? props.height : 24) / 2}`}
        d="M11.866.841a.5.5 0 1 0-.732-.682l-7 7.5a.5.5 0 0 0 0 .682l7 7.504a.5.5 0 1 0 .732-.682L5.184 8 11.866.841z"
      />
    </Svg>
  );

DropdownSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
  rotation: PropTypes.string
};

module.exports = DropdownSvg;

