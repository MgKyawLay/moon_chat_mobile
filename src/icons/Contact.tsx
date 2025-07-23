import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

interface Props extends SvgProps {
    width?: number;
    height?: number;
    color: string;
    xmlns?: string;
}

function Contact(props: Props) {
    return (
        <Svg
            width={props.width || 19}
            height={props.height || 17}
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.625 10a4 4 0 100-8 4 4 0 000 8zm0 0a6 6 0 00-6 6m6-6a6 6 0 016 6m-2-7a4 4 0 10-2.777-6.879M11.625 9c-.345 0-.68-.044-1-.126m1 .126a6 6 0 016 6m-6-6a6.01 6.01 0 00-1.5.189"
                stroke={props.color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default Contact
