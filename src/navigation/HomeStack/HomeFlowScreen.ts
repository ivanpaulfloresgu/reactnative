import { GinoDataParam } from "../../models/Gino"

export enum HomeFlowScreen {
  INITIAL_VIEW = 'INITIAL_VIEW',
  HOME = 'HOME',
  IVAN_STACK = 'IVAN_STACK',
  LEO_STACK = 'LEO_STACK',
  GINO_STACK = 'GINO_STACK',
  JHEYCKOFF_STACK = 'JHEYCKOFF_STACK',
}

export type HomeStackParamList = {
  HOME: undefined
  INITIAL_VIEW: undefined
  IVAN_STACK: undefined
  LEO_STACK: undefined
  GINO_STACK: {
    params: {ginoFlow: GinoDataParam}
  }
  JHEYCKOFF_STACK: undefined
}
