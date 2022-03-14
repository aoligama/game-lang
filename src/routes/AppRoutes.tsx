import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { 
    Routes, 
    RootParamList 
} from '../constants/navigation'
import { Home } from '../screens/Home'
import { Question } from '../screens/Question'
import { Finished } from '../screens/Finished'

const Stack = createNativeStackNavigator()

const AppStack = () => (
    <Stack.Navigator 
        initialRouteName={Routes.HOME} 
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name={Routes.HOME}
            component={Home}
        />
        <Stack.Screen
            name={Routes.QUESTION}
            component={Question}
        />
        <Stack.Screen
            name={Routes.FINISHED}
            component={Finished}
        />
    </Stack.Navigator>
)

const RootStack = createNativeStackNavigator<RootParamList>()

const AppRoutes = () => (
    <RootStack.Navigator initialRouteName={Routes.APP_ROUTE}>
        <RootStack.Screen
            name={Routes.APP_ROUTE}
            component={AppStack}
            options={{ headerShown: false }}
        />
    </RootStack.Navigator>
)
export { AppRoutes }
