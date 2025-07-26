import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function ChevronLeft(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 24 24"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15 6l-6 6 6 6"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ChevronLeft
