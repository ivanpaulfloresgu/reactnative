import { useContext } from 'react'
import { ParamsContext } from '../context/ParamsContext/ParamsContext'

export const useParamsContext = () => {
  const state = useContext(ParamsContext)
  if (!state) {
    throw new Error(
      'useParamsContext must be used within an DependencyContainerContext',
    )
  }
  return { params: state.params, setParams: state.setParams }
}
