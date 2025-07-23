import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    width?: number;
    height?: number;
    color?: string;
}

function Chat(props: Props) {
    return (
        <Svg
            width={props.width || 20}
            height={props.height || 19}
            viewBox="0 0 20 19"
            fill="none"
            {...props}
        >
            <Path
                d="M1.125 5a4 4 0 014-4h10a4 4 0 014 4v5a4 4 0 01-4 4h-4.063a2 2 0 00-1.537.72l-2.632 3.158c-.599.719-1.768.295-1.768-.64v-2.667A.571.571 0 004.554 14v0a3.429 3.429 0 01-3.429-3.429V5z"
                stroke={props.color || "#35F"}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default Chat
