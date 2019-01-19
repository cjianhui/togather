import React from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Ellipse,
  Defs,
  G,
  Use,
  Path,
  ClipPath
} from 'react-native-svg';

// Flags SVG render code was referenced from
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

const HK_FLAG = (width, height, style) =>
  (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 640 480"
    >
      <Defs>
        <ClipPath id="a">
          <Path fill-opacity=".7" d="M-89 0h682.6v512H-89z" />
        </ClipPath>
      </Defs>
      <G clip-path="url(#a)" transform="translate(83.5) scale(.94)">
        <Path fill="#ba0000" fill-rule="evenodd" d="M618 512h-731.4V0H618z" />
        <Path fill="#fff" fill-rule="evenodd" d="M241.9 247.8s-51.6-22.2-44.2-79.8c7.1-27.7 19.8-46.6 42.7-56.9 10.8-3.3 21.8-4.8 33-5.7-3 2.8-5.4 5.6-6.7 9-2.4 6.4-.6 12.4 2.7 18.5 4.1 7 6.6 14.2 7.4 23.6a36.6 36.6 0 0 1-14.6 33.7c-6.6 5.1-14.4 6.9-20.8 12.7-5 4.8-8 9.7-9 18.1-.2 16.1 4.1 18.4 9.5 26.8z" />
        <Path fill="#ba0000" fill-rule="evenodd" stroke="#000" stroke-width="2.1" d="M232 164.5v-.3" />
        <Path fill="none" stroke="#ba0000" stroke-width="2.1" d="M235.3 241.8c-20-17.7-18.3-62.4-3-77.3" />
        <Path fill="#ba0000" fill-rule="evenodd" d="M244.6 154.5l3.3 5.5-6-2.5-4.7 5 .8-6.5-6-2.5 6.5-1.5.8-6.4 3.3 5.5 6.6-1.5" />
        <Path fill="#fff" fill-rule="evenodd" d="M246.3 244s6-55.9 63.3-65.7c28.6-1.2 50.4 5.3 67 24.3 6.3 9.3 10.9 19.4 15 29.8-3.5-2-6.8-3.5-10.6-3.7-6.7-.5-12 3-16.8 7.9a53.2 53.2 0 0 1-20.4 14 36.6 36.6 0 0 1-36.5-4c-6.8-4.9-10.8-11.8-18.2-16.2-6.1-3.3-11.6-4.8-20-3.4-15.5 4.6-16.3 9.4-22.8 17z" />
        <Path fill="#ba0000" fill-rule="evenodd" stroke="#000" stroke-width="2.1" d="M323 210.2h.3" />
        <Path fill="none" stroke="#ba0000" stroke-width="2.1" d="M250 236c11.2-24.4 54.4-35.8 73.1-25.6" />
        <Path fill="#ba0000" fill-rule="evenodd" d="M336.3 219.3L332 224l.6-6.5-6-3 6.3-1 .6-6.7 3.4 6 6.4-1.2-4.3 4.7 3.3 6" />
        <Path fill="#fff" fill-rule="evenodd" d="M250.1 248s55-12 82.4 39.3c10.3 26.7 11 49.4-1.7 71.1-6.8 9-15 16.5-23.5 23.8.8-4 1.1-7.6.1-11.2-1.6-6.6-6.6-10.5-12.8-13.5a53.1 53.1 0 0 1-19.8-15 36.6 36.6 0 0 1-7.7-35.8c2.4-8 7.7-14 9.5-22.4 1.2-6.8.9-12.5-3.1-20-9.3-13.2-14.1-12.5-23.4-16.3z" />
        <Path fill="#ba0000" fill-rule="evenodd" stroke="#000" stroke-width="2.1" d="M306.5 310.1l.2.2" />
        <Path fill="none" stroke="#ba0000" stroke-width="2.1" d="M259 249c26.6 2.9 51.1 40.2 47.4 61.3" />
        <Path fill="#ba0000" fill-rule="evenodd" d="M302.1 325.6l-5.9-2.6 6.5-1.5.8-6.7 3.1 5.7 6.5-1.5-4.5 5 3 5.7-5.8-2.6-4.5 5.1" />
        <Path fill="#fff" fill-rule="evenodd" d="M248.9 253.7s26.9 49.4-14.5 90c-22.8 17.4-44.4 24.5-68.8 18.4-10.5-4-20-9.7-29.5-15.9 4-.3 7.7-1 10.9-3 5.8-3.4 8.1-9.3 9.3-16a53 53 0 0 1 8.8-23.3 36.6 36.6 0 0 1 32.2-17.5c8.4.1 15.6 3.6 24.2 3 6.9-.9 12.3-2.8 18.4-8.8 10-12.5 8-17 9-27z" />
        <Path fill="#ba0000" fill-rule="evenodd" stroke="#000" stroke-width="2.1" d="M205.1 325.3l-.1.2" />
        <Path fill="none" stroke="#ba0000" stroke-width="2.1" d="M250.3 262.4c4.9 26.4-24.1 60.5-45.4 62.7" />
        <Path fill="#ba0000" fill-rule="evenodd" d="M189 325.4l.9-6.4 3.3 5.7 6.6-1-4.6 4.6 3.3 5.7-6.1-2.9-4.6 4.6.8-6.4-6.1-2.9" />
        <Path fill="#fff" fill-rule="evenodd" d="M242.8 252.6S205.2 294.4 153 269c-24-15.7-37.8-33.8-40.1-58.8.3-11.3 2.4-22.1 5.1-33 1.7 3.6 3.6 6.8 6.5 9.2 5.1 4.3 11.5 4.5 18.3 3.4 8-1.7 15.6-1.7 24.7.6a36.6 36.6 0 0 1 27.3 24.6c2.7 7.9 1.8 15.9 5.3 23.8 3 6.2 6.6 10.6 14.3 14.4 15.2 5.3 18.7 1.9 28.4-.5z" />
        <Path fill="#ba0000" fill-rule="evenodd" stroke="#000" stroke-width="2.1" d="M160.7 235.2l-.2-.1" />
        <Path fill="none" stroke="#ba0000" stroke-width="2.1" d="M235 256.9c-23.2 13.3-65-2.7-74.2-22" />
        <Path fill="#ba0000" fill-rule="evenodd" d="M155.3 220l6.3-1.3-4.3 5 3.1 5.9-5.8-2.8-4.3 5 .7-6.8-5.9-2.8 6.3-1.3.7-6.8" />
      </G>
    </Svg>
  );

const SG_FLAG = (width, height, style) =>
  (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 640 480"
    >
      <Defs>
        <ClipPath id="a">
          <Path fill-opacity=".7" d="M0 0h640v480H0z" />
        </ClipPath>
      </Defs>
      <G fill-rule="evenodd" clip-path="url(#a)">
        <Path fill="#fff" d="M-20 0h720v480H-20z" />
        <Path fill="#df0000" d="M-20 0h720v240H-20z" />
        <Path fill="#fff" d="M146 40.2a84.4 84.4 0 0 0 .8 165.2 86 86 0 0 1-106.6-59 86 86 0 0 1 59-106c16-4.6 30.8-4.7 46.9-.2z" />
        <Path fill="#fff" d="M133 110l4.9 15-13-9.2-12.8 9.4 4.7-15.2-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.5 52l5 15.1-13-9.2-12.9 9.3 4.8-15.1-12.8-9.4 15.9-.1 4.9-15.1 5 15h16zm58.5-.4l4.9 15.2-13-9.3-12.8 9.3 4.7-15.1-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.4-51.6l4.9 15.1-13-9.2-12.8 9.3 4.8-15.1-12.9-9.4 16-.1 4.8-15.1 5 15h16zm-46.3-34.3l5 15.2-13-9.3-12.9 9.4 4.8-15.2-12.8-9.4 15.8-.1 5-15.1 5 15H193z" />
      </G>
    </Svg>
  );

const TW_FLAG = (width, height, style) =>
  (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 640 480"
    >
      <Defs>
        <ClipPath id="a">
          <Path fill-opacity=".7" d="M0 0h682.7v512H0z" />
        </ClipPath>
      </Defs>
      <G fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)" transform="scale(.9375)">
        <Path fill="#fe0000" d="M0 0h768v512H0z" />
        <Path fill="#000095" d="M0 0h385.7v256H0z" />
        <Path fill="#fff" d="M282.1 178.6l-47.3-9.8 10 47.3-36-32.1-15 46-15.2-45.9-36 32.4 9.8-47.4-47.2 10.1 32-36.1-46-15 46-15.2-32.4-35.8 47.3 9.7-10-47.3 36 32.1 15-46 15.2 45.9 35.9-32.4-9.7 47.4 47.2-10.1-32 36.1 45.9 15-45.9 15.2z" />
        <Path fill="#000095" d="M238.5 175l-15 7.9-14.5 8.6-17-.6-16.9.2-14.3-9L146 174l-8-15-8.6-14.5.6-16.8-.2-17 9-14.2 8.3-14.8 14.9-7.9 14.6-8.6 16.9.6 17-.2 14.3 9 14.7 8.2 8 14.9 8.6 14.5-.6 16.9.2 16.9-9 14.3z" />
        <Path fill="#fff" d="M244.6 128.3a51.9 51.9 0 1 1-103.7 0 51.9 51.9 0 0 1 103.7 0z" />
      </G>
    </Svg>
  );

const JP_FLAG = (width, height, style) =>
  (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 640 480"
    >
      <Defs>
        <ClipPath id="a">
          <Path fill-opacity=".7" d="M-88 32h640v480H-88z" />
        </ClipPath>
      </Defs>
      <G fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)" transform="translate(88 -32)">
        <Path fill="#fff" d="M-128 32h720v480h-720z" />
        <Ellipse cx="523.1" cy="344.1" fill="#d30000" rx="194.9" ry="194.9" transform="translate(-168.4 8.6) scale(.76554)" />
      </G>
    </Svg>
  );

const PH_FLAG = (width, height, style) =>
  (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 640 480"
    >
      <Path d="m0 0h640v240h-640z" fill="#0038a8" />
      <Path d="m0 240h640v240h-640z" fill="#ce1126" />
      <Path d="M 415.7,240 0,480 V 0" fill="#fff" />
      <G fill="#fcd116">
        <G stroke-width="1pt">
          <Path d="m26.689 42.443 14.382 12.428 16.652-9.1669-7.3761 17.52 13.864 13.005-18.941-1.6014-8.0837 17.204-4.3301-18.509-18.86-2.3717 16.265-9.8378z" />
          <Path d="m350.47 214.72 0.38729 19.005 17.955 6.2412-17.955 6.241-0.38729 19.005-11.484-15.148-18.194 5.5045 10.857-15.603-10.857-15.603 18.194 5.5045z" />
          <Path d="m37.187 388.1 8.0837 17.204 18.941-1.6014-13.864 13.005 7.3761 17.52-16.652-9.167-14.382 12.428 3.5724-18.67-16.265-9.8378 18.86-2.3718z" />
        </G>
        <Path d="m151.45 139.1-6.2036 6.2036 3.0766 46.987c-1.046 0.0674-2.0814 0.16882-3.1081 0.30261l-5.6488-42.877-5.0624 5.0624 7.622 38.325c-6.2697 1.2406-12.097 3.7036-17.223 7.1366l-21.706-32.487h-7.1618l26.327 34.315c-0.82608 0.63506-1.6262 1.2993-2.4084 1.9859l-31.056-35.412h-8.7758v8.7758l35.412 31.056c-0.6873 0.78308-1.3502 1.5875-1.9859 2.4145l-34.315-26.334v7.1618l32.493 21.713c-3.4322 5.1258-5.9026 10.949-7.1429 17.217l-38.325-7.622-5.0624 5.0624 42.877 5.6488c-0.13379 1.0268-0.23519 2.0623-0.30262 3.1081l-46.987-3.0766-6.2036 6.2036 6.2036 6.2036 46.987-3.0766c0.068 1.0464 0.16883 2.0875 0.30262 3.1144l-42.877 5.6425 5.0624 5.0624 38.325-7.622c1.2404 6.2695 3.7029 12.096 7.1366 17.223l-32.487 21.706v7.1618l34.315-26.327c0.63511 0.8264 1.2993 1.6258 1.9859 2.4084l-35.412 31.056v8.7758h8.7758l31.056-35.412c0.78329 0.68778 1.5874 1.3496 2.4145 1.9859l-26.334 34.315h7.1618l21.713-32.493c5.1244 3.4351 10.948 5.9089 17.217 7.1492l-7.622 38.318 5.0624 5.0624 5.6488-42.877c1.0262 0.13379 2.062 0.23519 3.1081 0.30262l-3.0766 46.987 6.2036 6.2036 6.2036-6.2036-3.0766-46.987c1.046-0.068 2.0814-0.16883 3.1081-0.30262l5.6488 42.877 5.0624-5.0624-7.622-38.325c6.2697-1.2406 12.097-3.7034 17.223-7.1366l21.706 32.487h7.1618l-26.327-34.315c0.82608-0.63506 1.6263-1.2993 2.4084-1.9859l31.056 35.412h8.7758v-8.7758l-35.412-31.056c0.6873-0.78308 1.3502-1.5875 1.9859-2.4145l34.315 26.334v-7.1618l-32.493-21.713c3.4322-5.1257 5.9026-10.949 7.1429-17.217l38.325 7.622 5.0624-5.0624-42.877-5.6488c0.13378-1.0269 0.23519-2.0623 0.30261-3.1081l46.987 3.0766 6.2036-6.2036-6.2036-6.2036-46.987 3.0766c-0.0674-1.046-0.16883-2.0814-0.30261-3.1081l42.877-5.6488-5.0624-5.0624-38.325 7.622c-1.2406-6.2697-3.7033-12.097-7.1366-17.223l32.487-21.706v-7.1618l-34.315 26.327c-0.63506-0.82603-1.2993-1.6262-1.9859-2.4083l35.412-31.056v-8.7758h-8.7758l-31.056 35.412c-0.78308-0.68731-1.5874-1.3502-2.4145-1.9859l26.334-34.315h-7.1618l-21.713 32.493c-5.1257-3.4322-10.949-5.9025-17.217-7.1429l7.622-38.325-5.0624-5.0624-5.6488 42.877c-1.0268-0.13379-2.0623-0.23519-3.1081-0.30261l3.0766-46.987z" stroke-width="5.309" />
      </G>
    </Svg>
  );

const MY_FLAG = (width, height, style) =>
  (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 640 480"
    >
      <Path fill="#cc0001" d="M0 0h640v480H0z" />
      <Path id="a" fill="#fff" d="M0 445.8h640V480H0z" />
      <Use width="100%" height="100%" transform="translate(0 -68.6)" href="#a" />
      <Use width="100%" height="100%" transform="translate(0 -137.2)" href="#a" />
      <Use width="100%" height="100%" transform="translate(0 -205.8)" href="#a" />
      <Use width="100%" height="100%" transform="translate(0 -274.3)" href="#a" />
      <Use width="100%" height="100%" transform="translate(0 -343)" href="#a" />
      <Use width="100%" height="100%" transform="translate(0 -411.5)" href="#a" />
      <Path fill="#010066" d="M0 0h372.6v274.3H0z" />
      <G fill="#fc0">
        <Path d="M149.7 48.5c-49 0-88.9 39.7-88.9 88.6a88.8 88.8 0 0 0 89 88.6 88.7 88.7 0 0 0 48-14 78.9 78.9 0 0 1-25.8 4.2c-43.5 0-78.8-35.2-78.8-78.5a78.7 78.7 0 0 1 106.2-73.7 88.7 88.7 0 0 0-49.7-15.2z" />
        <Path d="M297.1 183.2l-37.4-19.5 11 40-25-33.5-7.8 40.7-7.7-40.7-25.1 33.4 11.2-40-37.6 19.5 28-31.3-42.5 1.6 39-16.3-39-16.5 42.5 1.7L178.9 91l37.4 19.5-11-40 25 33.5 7.8-40.7 7.7 40.7 25.1-33.3-11.2 39.9 37.6-19.4-28 31.2 42.5-1.6-39 16.4 39 16.5-42.5-1.8z" />
      </G>
    </Svg>
  );

const TH_FLAG = (width, height, style) =>
  (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 640 480"
    >
      <G fill-rule="evenodd">
        <Path fill="#fff" d="M0 0h640v480H0z" />
        <Path fill="#001b9a" d="M0 162.5h640v160H0z" />
        <Path fill="#e70000" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
      </G>
    </Svg>
  );

const ID_FLAG = (width, height, style) =>
  (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 640 480"
    >
      <G fill-rule="evenodd" stroke-width="1pt">
        <Path fill="#e70011" d="M0 0h640v249H0z" />
        <Path fill="#fff" d="M0 240h640v240H0z" />
      </G>
    </Svg>
  );

class FlagSvg extends React.Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fillColor: PropTypes.string,
    countryCode: PropTypes.string.isRequired
  };

  render() {
    const width = this.props.width ? this.props.width : 32;
    const height = this.props.height ? this.props.height : 24;
    switch (this.props.countryCode) {
      case 'hk':
        return HK_FLAG(width, height, this.props.style);
      case 'tw':
        return TW_FLAG(width, height, this.props.style);
      case 'jp':
        return JP_FLAG(width, height, this.props.style);
      case 'ph':
        return PH_FLAG(width, height, this.props.style);
      case 'my':
        return MY_FLAG(width, height, this.props.style);
      case 'th':
        return TH_FLAG(width, height, this.props.style);
      case 'id':
        return ID_FLAG(width, height, this.props.style);
      default:
        return SG_FLAG(width, height, this.props.style);
    }
  }
}

module.exports = FlagSvg;

