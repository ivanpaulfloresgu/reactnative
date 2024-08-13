import { GinoDataParam } from '../../models/Gino'

export enum GinoFlowScreen {
  PROJECT_LIST = 'PROJECT_LIST',
  NETFLIX = 'NETFLIX',
  MANGAS = 'MANGAS',
  CHOOSE_USER = 'CHOOSE_USER',
  HOME_NETFLIX = 'HOME_NETFLIX',
  MOVIE_INFORMATION = 'MOVIE_INFORMATION',
}

export type GinoStackParamList = {
  PROJECT_LIST: undefined
  NETFLIX: undefined
  MANGAS: undefined
  CHOOSE_USER: undefined
  HOME_NETFLIX: {
    ginoFlow?: GinoDataParam
  }
  MOVIE_INFORMATION: {
    ginoFlow?: GinoDataParam
  }
}
