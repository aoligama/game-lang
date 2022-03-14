import React from 'react'
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    ActivityIndicator
} from 'react-native'
import { styles } from './styles'

type Props = TouchableOpacityProps & {
    word: string
    isLoading?: boolean
}

export function WordButton({
    word,
    isLoading = false,
    ...rest
}: Props) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            disabled={isLoading}
            {...rest}
        >
            {
                isLoading ? <ActivityIndicator /> :
                <>
                    <Text style={styles.title}>
                        {word}
                    </Text>
                </>
            }
        </TouchableOpacity>
    )
}