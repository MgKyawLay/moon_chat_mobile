import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function MessageMultiColor(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 1024 1024"
            {...props}
        >
            <Path
                d="M896 192H128c-35.3 0-64 28.7-64 64v512c0 35.3 28.7 64 64 64h576.6l191.6 127.7L896 832c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64z"
                fill="#3D5AFE"
            />
            <Path
                d="M640 512c0-125.4-51.5-238.7-134.5-320H128c-35.3 0-64 28.7-64 64v512c0 35.3 28.7 64 64 64h377.5c83-81.3 134.5-194.6 134.5-320z"
                fill="#536DFE"
            />
            <Path d="M192 512a64 64 0 10128 0 64 64 0 10-128 0z" fill="#FFFF8D" />
            <Path d="M448 512a64 64 0 10128 0 64 64 0 10-128 0z" fill="#FF0" />
            <Path d="M704 512a64 64 0 10128 0 64 64 0 10-128 0z" fill="#FFEA00" />
        </Svg>
    )
}

export default MessageMultiColor;
