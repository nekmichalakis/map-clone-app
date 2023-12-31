import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PlugSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={20}
    viewBox="0 0 384 512"
    {...props}
  >
    <Path d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32zm192 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-67.2C297 398 352 333.4 352 256v-32c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
  </Svg>
)
export default PlugSvg