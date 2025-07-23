import * as React from "react"
import Svg, { Path } from "react-native-svg"

function More(props: any) {
    return (
        <Svg
            width={20}
            height={6}
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M4.875 3a2 2 0 11-4 0 2 2 0 014 0zM11.875 3a2 2 0 11-4 0 2 2 0 014 0zM18.875 3a2 2 0 11-4 0 2 2 0 014 0z"
                stroke="#1A1A1A"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default More;
