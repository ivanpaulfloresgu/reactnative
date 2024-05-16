import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

export const gridUnits = (value: number) => {
  return value * 8
}

export const widthPercent = (value: number) => {
  return value * width
}

export const heightPercent = (value: number) => {
  return value * height
}
