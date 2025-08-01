import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function PersonPlus(props:SvgProps) {
  return (
    <Svg
      viewBox="0 0 16 16"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="bi bi-person-plus"
      {...props}
    >
      <Path d="M6 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
      <Path
        fillRule="evenodd"
        d="M13.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V8h-1.5a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z"
      />
    </Svg>
  )
}

export default PersonPlus;
