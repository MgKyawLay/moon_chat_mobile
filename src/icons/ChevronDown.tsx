import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ChevronDown(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 9l6 6 6-6"
        stroke={props.color || '#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChevronDown;
