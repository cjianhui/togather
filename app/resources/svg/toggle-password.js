import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

const TogglePasswordSvg = props =>
  (
    props.reveal ?
      <Svg
        width={props.width ? props.width : 24}
        height={props.height ? props.height : 24}
        viewBox="0 0 24 24"
      >
        <G fill="#333132">
          <Path id="a" d="M5.452 6.16L3.146 3.853a.5.5 0 1 1 .708-.708l17 17a.5.5 0 0 1-.708.708l-2.46-2.46C15.877 19.464 13.98 20 12 20c-4.418 0-8.418-2.667-12-8 1.72-2.562 3.538-4.51 5.452-5.84zm11.503 11.502l-1.79-1.79a5 5 0 0 1-7.036-7.036L6.17 6.879C4.452 8.039 2.801 9.742 1.213 12 4.52 16.704 8.108 19 12 19c1.71 0 3.36-.443 4.955-1.338zm-2.502-2.502L8.84 9.547a4 4 0 0 0 5.613 5.613zM7.23 5.113A10.814 10.814 0 0 1 12 4c4.418 0 8.418 2.667 12 8-1.477 2.2-3.025 3.946-4.645 5.238l-.711-.711c1.428-1.122 2.808-2.628 4.143-4.527C19.48 7.296 15.892 5 12 5a9.776 9.776 0 0 0-4.016.867l-.754-.754zm2.454 2.454a5 5 0 0 1 6.748 6.748l-.75-.75a4 4 0 0 0-5.247-5.247l-.75-.75z" />
        </G>
      </Svg>
      :
      <Svg
        width={props.width ? props.width : 24}
        height={props.height ? props.height : 24}
        viewBox="0 0 24 24"
      >
        <G fill="#333132">
          <Path id="a" d="M12 20c-4.418 0-8.418-2.667-12-8 3.582-5.333 7.582-8 12-8s8.418 2.667 12 8c-3.582 5.333-7.582 8-12 8zm0-15C8.108 5 4.52 7.296 1.213 12 4.52 16.704 8.108 19 12 19c3.892 0 7.48-2.296 10.787-7C19.48 7.296 15.892 5 12 5zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        </G>
      </Svg>
  );

TogglePasswordSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
  reveal: PropTypes.bool
};

module.exports = TogglePasswordSvg;
