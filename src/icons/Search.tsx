import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function Search(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 6a5 5 0 015 5m.659 5.655L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z"
        stroke={props.color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Search;
