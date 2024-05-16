import React from 'react'
import { AuthStack } from '../AuthStack'
import { useAuthContext } from '../../hooks/useAuthContext'
import { HomeStack } from '../HomeStack'

export const MainStack = () => {
  const { isLogged } = useAuthContext()

  if (!isLogged) return <AuthStack />
  return <HomeStack />
}
