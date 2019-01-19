import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const CreatePassworSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 44}
      height={props.height ? props.height : 21}
      viewBox="0 0 44 21"
    >
      <Path fill="#333132" fill-rule="evenodd" d="M15.942 15.942a8.133 8.133 0 0 1-5.774 2.392 8.138 8.138 0 0 1-5.776-2.392A8.146 8.146 0 0 1 2 10.168a8.154 8.154 0 0 1 2.392-5.776A8.154 8.154 0 0 1 10.168 2a8.15 8.15 0 0 1 5.774 2.392 8.138 8.138 0 0 1 2.392 5.776 8.13 8.13 0 0 1-2.392 5.774m26.516-6.774H20.234C19.724 4.028 15.44.002 10.168 0 4.552.002.002 4.552 0 10.168c.002 5.614 4.552 10.166 10.168 10.166 5.272 0 9.556-4.028 10.066-9.166h8.474v3.874a1 1 0 0 0 2 0v-3.874h7.75v8.75a1 1 0 0 0 2 0v-8.75h2a1 1 0 1 0 0-2" />
    </Svg>
  );

CreatePassworSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = CreatePassworSvg;

