import React, { createContext, useState, FC } from 'react'
import { ViewProps } from 'react-native'

export type AuthContextProps = {
  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void
}
export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider: FC<ViewProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  )
}
