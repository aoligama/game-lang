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

import { useNavigation } from '@react-navigation/native'
import useScore from '../../hooks/useScore'

export function Finished() {

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
                        Game Finished
                    </Text>

                    <Text style={styles.subtitle}>
                       Your Score: {score}
                    </Text>

                    <Button
                        title="GO HOME"
                        backgroundColor={COLORS.LIGHT}
                        color={COLORS.ERROR}
                        onPress={() => navigation.navigate(Routes.HOME)}
                    />
                </Card>
            </View>
        </KeyboardAvoidingView>
    )
}