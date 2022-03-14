import firestore from '@react-native-firebase/firestore'

const phrasesCollection = firestore().collection('phrases')

export async function getPhrases(): Promise<Array<Object>>{
    let phrases: any = []
    const data = await phrasesCollection.get()
    data.docs.forEach(item => {
        phrases.push(item.data())
    })
    return phrases
}
