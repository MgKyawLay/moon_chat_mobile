import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function Plus(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M13 3a1 1 0 10-2 0v8H3a1 1 0 100 2h8v8a1 1 0 102 0v-8h8a1 1 0 100-2h-8V3z"
                fill={props.color || "#000"}
            />
        </Svg>
    )
}

export default Plus
