import React from 'react'
import { 
    View, 
    KeyboardAvoidingView, 
    Platform, 
    Text 
} from 'react-native'
import { Routes } from '../../constants/navigation'

import { styles } from './styles'
import { COLORS } from '../../theme'

import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import useScore from '../../hooks/useScore'
import { useNavigation } from '@react-navigation/native'

export function Home() {

    const navigation = useNavigation()
    const { score } = useScore()

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Header />
            <View style={styles.container}>
                <Card>
                    <MaterialCommunityIcons name="trophy" size={85} color={COLORS.LIGHT}/>
                    
                    <Text style={styles.subtitle}>
                        Last Record: {score}
                    </Text>

                    <Button
                        title="START GAME"
                        backgroundColor={COLORS.LIGHT}
                        color={COLORS.SUCCESS}
                        onPress={() => navigation.navigate(Routes.QUESTION)}
                    />
                </Card>
            </View>
        </KeyboardAvoidingView>
    )
}