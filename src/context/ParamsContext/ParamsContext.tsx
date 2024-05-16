import React, { createContext, FC, useState } from 'react'
import { ViewProps } from 'react-native'
import { CustomParams } from '../../models/Navigation'

export type ParamsContextProps = {
  params?: CustomParams
  setParams: (params: CustomParams) => void
}

export const ParamsContext = createContext<ParamsContextProps | null>(null)

export const ParamsContextProvider: FC<ViewProps> = ({ children }) => {
  const [params, setParams] = useState<CustomParams | undefined>(undefined)
  const handleSetParams = (customParams: CustomParams) => {
    setParams({
      ...params,
      ...customParams,
    })
  }
  return (
    <ParamsContext.Provider value={{ params, setParams: handleSetParams }}>
      {children}
    </ParamsContext.Provider>
  )
}
