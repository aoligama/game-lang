import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Host } from 'react-native-portalize'
import { NAVIGATION_LINKING_PREFIXES, screens } from './src/constants/linking'
import { AppRoutes } from './src/routes/AppRoutes'
import { LevelProvider } from './src/contexts/LevelProvider'
import { ScoreProvider } from './src/contexts/ScoreProvider'
import { Routes as NavRoutes } from './src/constants/navigation'

const Routes = () => {
  return (
    <NavigationContainer
      linking={{
        prefixes: NAVIGATION_LINKING_PREFIXES,
        config: {
          initialRouteName: NavRoutes.HOME,
          screens,
        },
      }}
    >
      <Host>
        <AppRoutes />
      </Host>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <LevelProvider>
      <ScoreProvider>
        <Routes />
      </ScoreProvider>
    </LevelProvider>
  )
}

export default App