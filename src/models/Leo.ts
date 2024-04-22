import { ColorValue } from 'react-native'
import { LeoFlowScreen } from '../navigation/LeoStack/LeoFlowScreen'

export type LeoList = {
  name: string
  iconName: string
  iconColor: ColorValue
  route: LeoFlowScreen
}
