import React from 'react'
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    ColorValue,
    ActivityIndicator
} from 'react-native'
import { styles } from './styles'

type Props = TouchableOpacityProps & {
    title: string
    color: ColorValue
    backgroundColor: ColorValue
    isLoading?: boolean
}

export function Button({
    title,
    color,
    backgroundColor,
    isLoading = false,
    ...rest
}: Props) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            activeOpacity={0.7}
            disabled={isLoading}
            {...rest}
        >
            {
                isLoading ? <ActivityIndicator color={color} /> :
                <>
                    <Text style={[styles.title, { color }]}>
                        {title}
                    </Text>
                </>
            }
        </TouchableOpacity>
    )
}