import { GinoDataParam } from "../../models/Gino"

export enum GinoFlowScreen {
  PROJECT_LIST = 'PROJECT_LIST',
  NETFLIX = 'NETFLIX',
  MANGAS = 'MANGAS',
  CHOOSE_USER = 'CHOOSE_USER',
  HOME_NETFLIX = 'HOME_NETFLIX'
}

export type GinoStackParamList = {
  PROJECT_LIST: undefined
  NETFLIX: undefined
  MANGAS: undefined
  CHOOSE_USER: undefined
  HOME_NETFLIX: {
     ginoFlow?: GinoDataParam
  }
}
