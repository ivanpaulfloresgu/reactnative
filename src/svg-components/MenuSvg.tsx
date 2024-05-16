import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

type MenuSvgProps = {
  width: number
  height: number
}

export const MenuSvg: FC<MenuSvgProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height}>
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.002}
        d="M4.062 8.125h17.875M4.062 13h17.875M4.062 17.875h17.875"
      />
    </Svg>
  )
}
