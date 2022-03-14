import React, { useState, useEffect } from 'react'
import {
    View, 
    KeyboardAvoidingView, 
    Platform, 
    Text,
    ActivityIndicator
} from 'react-native'

import { styles } from './styles'
import { COLORS } from '../../theme'

import { Card } from '../../components/Card'
import { Toastr } from '../../components/Toastr'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { WordButton } from '../../components/WordButton'
import { Phrase } from '../../components/Phrase'

import useLevel from '../../hooks/useLevel'
import useScore from '../../hooks/useScore'
import { useNavigation } from '@react-navigation/native'

import { getPhrases } from '../../services/phrases-service'
import { IPhrase } from '../../interfaces'

export function Question() {

    const [selected, setSelected] = useState<string>('')
    const [checkAnswer, setCheckAnswer] = useState<boolean>(false)
    const [level, setLevel] = useState<number>(0)
    const [phrases, setPhrases] = useState<Array<object>>([])
    const [isLoading, setIsLoading] = useState(true)
    const [phrase, setPhrase] = useState<IPhrase>()

    const { levels, setLevels } = useLevel()
    const { score, setScore } = useScore()
    const navigation = useNavigation()

    const fetchPhrases = () => {
        const data = getPhrases()
        data.then(data => {
            setPhrases(data)
        })
        setIsLoading(false)
        setPhrase(phrases[level] as IPhrase)
    }

    function handleWordSelection (word: string) {
        if(!checkAnswer) {
            setSelected(word)
            setCheckAnswer(false)
        }
    }

    function handleNextLevel() {
        if(level < levels - 1) {
            setLevel(level + 1)
            setPhrase(phrases[level] as IPhrase)

            setSelected('')
            setCheckAnswer(false)
        } else {
            navigation.navigate('Finished')
        }
    }

    function handleCheckAnswer(){
        setCheckAnswer(true)
        if(phrase?.correct === selected) {
            setScore(score + 100)
        }
    }

    useEffect(() => {
        fetchPhrases()
        setLevels(phrases.length)
    }, [,phrase, phrases])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {
                !isLoading && phrases.length >= 4 && phrase ? (
                    <>
                        <Header />
                        <View style={styles.container}>
                            <Card>
                                <Text style={styles.instructions}>Fill in the missing word</Text>
                                <Phrase words={phrase?.english || ''} missing={phrase?.missing} />
                                <View style={styles.groupItems}>
                                    {
                                        phrase?.german.map(word => {
                                            return(
                                                <>
                                                    {
                                                        word === 'missing' ? (
                                                            <Text style={[styles.missingWord, styles.translate]} key={word}>
                                                                {
                                                                    selected ? (
                                                                        <WordButton word={selected} />
                                                                    ) : (
                                                                        <Text>________</Text>
                                                                    )
                                                                }
                                                            </Text>
                                                        ) : (
                                                            <Text style={[styles.translate, {fontWeight: '300'}]} key={word}>{word}</Text>
                                                        )
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </View>
                                
                                <View style={[styles.groupItems, {paddingTop: 45, paddingBottom: 40}]}>
                                    {
                                        phrase?.words.map(word => {
                                            return (
                                                <WordButton word={word} onPress={() => handleWordSelection(word)} key={word} />
                                            )
                                        })
                                    }
                                </View>

                                {
                                    selected.length && !checkAnswer ? (
                                        <Button
                                            title="CHECK ANSWER"
                                            backgroundColor={COLORS.LIGHT}
                                            color={COLORS.SUCCESS}
                                            onPress={handleCheckAnswer}
                                        />
                                    ) : (
                                        <Button
                                            title="CHECK ANSWER"
                                            disabled
                                            backgroundColor={COLORS.SECONDARY}
                                            color={COLORS.PRIMARY}
                                        />
                                    )
                                }

                                {
                                    checkAnswer && selected.length && selected === phrase?.correct ? (
                                        <Toastr color={COLORS.SUCCESS} message="Great Job!">
                                            <Button
                                                title="NEXT"
                                                backgroundColor={COLORS.LIGHT}
                                                color={COLORS.SUCCESS}
                                                onPress={handleNextLevel}
                                            />
                                        </Toastr>
                                    ) : checkAnswer && selected.length && selected !== phrase?.correct ? (
                                        <Toastr color={COLORS.ERROR} message={`Answer: ${phrase?.correct}`}>
                                            <Button
                                                title="NEXT"
                                                backgroundColor={COLORS.LIGHT}
                                                color={COLORS.ERROR}
                                                onPress={handleNextLevel}
                                            />
                                        </Toastr>
                                    ) : (
                                        <></>
                                    )
                                }
                            </Card>
                        </View>
                    </>
                ) : (
                    <ActivityIndicator color={COLORS.PRIMARY} size={80} />
                )
            }
            
        </KeyboardAvoidingView>
    )
}