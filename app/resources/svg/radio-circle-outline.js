import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const RadioCircleOutline = props =>
  (
    <Svg
      width="44"
      height="44"
      viewBox="0 0 512 512"
    >
      <G fill="none" fill-rule="evenodd" opacity="0.5">
        <Path fill="#42f44e" fill-rule="nonzero" d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z" />
      </G>
    </Svg>
  );

module.exports = RadioCircleOutline;

