import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext/AuthContext'

export const useAuthContext = () => {
  const state = useContext(AuthContext)
  if (!state) {
    throw new Error(
      'useAuthContext must be used within an DependencyContainerContext',
    )
  }
  return {
    isLogged: state.isLogged,
    setIsLogged: state.setIsLogged,
  }
}
