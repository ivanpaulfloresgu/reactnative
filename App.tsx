import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './src/navigation/MainStack'
import useSetup from './src/hooks/useCachedResources'
import moment from 'moment'
import 'moment/locale/es'
import { ParamsContextProvider } from './src/context/ParamsContext/ParamsContext'
import { MenuProvider } from 'react-native-popup-menu'
import { AuthContextProvider } from './src/context/AuthContext/AuthContext'

moment.locale('es')

export default function App() {
  useSetup()

  return (
    <ParamsContextProvider>
      <AuthContextProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <MenuProvider skipInstanceCheck>
              <MainStack />
            </MenuProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContextProvider>
    </ParamsContextProvider>
  )
}
