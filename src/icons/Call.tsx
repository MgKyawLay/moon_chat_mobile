import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

function Call(props: Props) {
  return (
    <Svg
      width={props.width || 19}
      height={props.height || 20}
      viewBox="0 0 19 20"
      fill="none"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M15.249 1.502l.672.564.131.118a4.164 4.164 0 011.285 3.61c-.413 3.022-1.584 5.686-3.506 7.977-1.923 2.291-4.343 3.906-7.247 4.837l-.196.058a4.168 4.168 0 01-3.597-.706l-.169-.138-.384-.32a2.413 2.413 0 01-.018-3.683l1.352-1.156.119-.096a2.413 2.413 0 013 .081l.53.444a10.605 10.605 0 002.913-2.423l.236-.292a10.919 10.919 0 001.516-2.66l.13-.338-.53-.444a2.413 2.413 0 01-.528-3.075l1.065-1.805a2.145 2.145 0 013.226-.553z"
        stroke={props.color || "#35F"}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Call
