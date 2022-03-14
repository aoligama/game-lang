import { StyleSheet } from 'react-native'
import { FONTS } from '../../theme'

export const styles = StyleSheet.create({
    button: {
        height: 45,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        margin: 10,
        elevation: 15
    },
    title: {
        fontSize: 14,
        fontFamily: FONTS.BOLD,
        fontWeight: '800'
    }
})