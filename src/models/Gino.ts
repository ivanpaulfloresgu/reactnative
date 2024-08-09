import { ColorValue, ImageSourcePropType } from 'react-native'
import { GinoFlowScreen } from '../navigation/GinoStack/GinoFlowScreen'

export type ListProjectResponse = {
  name: string
  iconName: ImageSourcePropType
  iconColor: ColorValue
  route: GinoFlowScreen
  preferences?: preferencesList[]
}

export type preferencesList = {
  movieName: string
  isLike: boolean
  movieTime: string
  imageMovie: string 
  link: string
  idMovie: number
}

export type GinoDataParam = {
  selectTrailer: ListProjectResponse
}

export type Character = {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string 
  location: GeneralCharacter
  name: string
  origin: GeneralCharacter
  species: string
  status: string
  type: string
  url: string
};

export type GeneralCharacter = {
  name: string
  url: string
}
