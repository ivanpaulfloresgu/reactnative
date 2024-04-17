import { IvanList } from '../models/Ivan'
import { COLORS } from '../constants/colors'
import { IvanFlowScreen } from '../navigation/IvanStack/IvanFlowScreen'

export const dataIvanList: IvanList[] = [
  {
    name: 'Signature',
    iconName: 'signature',
    iconColor: COLORS.CYAN,
    route: IvanFlowScreen.SIGNATURE_SECTION,
  },
  {
    name: 'Audios',
    iconName: 'file-audio',
    iconColor: COLORS.CYAN,
    route: IvanFlowScreen.SIGNATURE_SECTION,
  },
]
