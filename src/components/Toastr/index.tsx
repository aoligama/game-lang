import React, { 
    ReactNode 
} from 'react'
import { View, ColorValue, Text } from 'react-native'
import { styles } from './styles'

interface Props {
    children: ReactNode
    color: ColorValue
    message: string
}

export function Toastr({ children, color, message }: Props) {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.message}>
                {message}
            </Text>
            <View style={styles.childrenWrapper}>
                { children }
            </View>           
        </View>
    )
}