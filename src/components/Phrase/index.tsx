import React from 'react'
import {
    Text,
    View
} from 'react-native'
import { styles } from './styles'

interface Props {
    words: Array<string>
    missing: string
}

export function Phrase({
    words,
    missing
}: Props) {
    return (
        <View style={styles.container}>
            {
                words.map(word => {
                    return(
                        <>
                            {
                                word === 'missing' ? (
                                    <Text 
                                        style={[styles.missingWord, styles.word]} 
                                        key={missing}
                                    >
                                        {missing}
                                    </Text>
                                ) : (
                                    <Text 
                                        style={[styles.word, {fontWeight: '300'}]} 
                                        key={`${word}`}
                                    >
                                        {word}
                                    </Text>
                                )
                            }
                        </>
                    )
                })
            }
        </View>
    )
}