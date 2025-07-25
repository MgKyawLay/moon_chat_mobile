import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function CheckCircle(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 16 16"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16A8 8 0 118 0a8 8 0 010 16zM5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z"
                fill={props.color || "#000"}
            />
        </Svg>
    )
}

export default CheckCircle;
