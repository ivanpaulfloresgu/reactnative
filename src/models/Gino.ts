import { ColorValue, ImageSourcePropType } from 'react-native'
import { GinoFlowScreen } from '../navigation/GinoStack/GinoFlowScreen'

export type ListProjectResponse = {
  name: string
  iconName: ImageSourcePropType
  iconColor: ColorValue
  route: GinoFlowScreen
}
