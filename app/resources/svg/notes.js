import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Use, Defs, G, Path } from 'react-native-svg';

const NotesSvg = props =>
  (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      viewBox="0 0 24 24"
    >
      <Defs>
        <Path id="a" d="M15.152 3.5H19c1.376 0 2.5 1.124 2.5 2.5v14c0 1.376-1.124 2.5-2.5 2.5H5A2.506 2.506 0 0 1 2.5 20V6c0-1.376 1.124-2.5 2.5-2.5h3.848A3.503 3.503 0 0 1 12 1.5c1.363 0 2.575.797 3.152 2zM19 4.5h-4.53l-.12-.33A2.51 2.51 0 0 0 12 2.5a2.51 2.51 0 0 0-2.35 1.67l-.12.33H5c-.824 0-1.5.676-1.5 1.5v14c0 .824.676 1.5 1.5 1.5h14c.824 0 1.5-.676 1.5-1.5V6c0-.824-.676-1.5-1.5-1.5zm-7 0c-.274 0-.5.226-.5.5s.226.5.5.5.5-.226.5-.5-.226-.5-.5-.5zm0-1c.826 0 1.5.674 1.5 1.5s-.674 1.5-1.5 1.5-1.5-.674-1.5-1.5.674-1.5 1.5-1.5zm1.5 14v-1h-6v1h6zm3-4v-1h-9v1h9zm0-4v-1h-9v1h9z" />
      </Defs>
      <G fill="none" fill-rule="evenodd">
        <Use fill="#000" fill-rule="nonzero" href="#a" />
      </G>
    </Svg>
  );

NotesSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string
};

module.exports = NotesSvg;
