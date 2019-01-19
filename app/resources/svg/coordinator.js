import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Defs, Path, G, Use } from 'react-native-svg';

const CoordinatorSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
    >
      <Defs>
        <Path id="a" d="M13.415 22a1.5 1.5 0 1 1 0-1H18.5a1.5 1.5 0 0 0 1.5-1.5v-1.55a2.5 2.5 0 0 1-2-2.45v-3a2.5 2.5 0 0 1 2-2.45V10a8 8 0 1 0-16 0v.05a2.5 2.5 0 0 1 2 2.45v3a2.5 2.5 0 1 1-5 0v-3a2.5 2.5 0 0 1 2-2.45V10a9 9 0 1 1 18 0v.05a2.5 2.5 0 0 1 2 2.45v3a2.5 2.5 0 0 1-2 2.45v1.55a2.5 2.5 0 0 1-2.5 2.5h-5.085zM4 11.085v5.83A1.5 1.5 0 0 0 5 15.5v-3a1.5 1.5 0 0 0-1-1.415zm-1 5.83v-5.83A1.5 1.5 0 0 0 2 12.5v3a1.5 1.5 0 0 0 1 1.415zm18-5.83v5.83a1.5 1.5 0 0 0 1-1.415v-3a1.5 1.5 0 0 0-1-1.415zm-1 5.83v-5.83a1.5 1.5 0 0 0-1 1.415v3a1.5 1.5 0 0 0 1 1.415zM12 22a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
      </Defs>
      <G fill={props.fillColor ? props.fillColor : '#333132'} fill-rule="nonzero">
        <Use fill={props.fillColor ? props.fillColor : '#333132'} href="#a" />
      </G>
    </Svg>
  );

CoordinatorSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = CoordinatorSvg;

