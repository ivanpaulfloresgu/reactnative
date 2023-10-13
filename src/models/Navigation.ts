import { ParamListBase } from '@react-navigation/native'
import { Usuario } from './Account'

export type ParamsList = ParamListBase

export type CustomParams = {
  user?: Usuario
}
