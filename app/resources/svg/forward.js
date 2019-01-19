import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G, Use, Defs } from 'react-native-svg';

const ForwardSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 16}
      height={props.height ? props.height : 16}
      viewBox="0 0 16 16"
    >
      <Defs>
        <Path
          id="a"
          fill={props.fillColor ? props.fillColor : ''}
          d="M11.8655276,0.841160983 C12.0539446,0.639285645 12.0430345,0.322891206 11.8411591,0.134474224 C11.6392838,-0.0539427582 11.3228893,-0.0430326051 11.1344724,0.158842733 L4.13447237,7.65884273 C3.95521267,7.8509067 3.95517094,8.14894447 4.13437685,8.34105862 L11.1343769,15.84527 C11.3227373,16.0471981 11.6391287,16.0581969 11.8410568,15.8698364 C12.0429848,15.681476 12.0539836,15.3650846 11.8656231,15.1631565 L5.18385346,8.0000976 L11.8655276,0.841160983 Z"
        />
      </Defs>
      <G fill="none" fill-rule="evenodd" transform="translate(8.000001, 8.002108) scale(-1, 1) translate(-8.000001, -8.002108) ">
        <Use fill="#333132" href="#a" />
      </G>
    </Svg>
  );

ForwardSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = ForwardSvg;

