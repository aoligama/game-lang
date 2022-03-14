import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
    button: {
        height: 35,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
        elevation: 15,
        backgroundColor: COLORS.LIGHT,
        padding: 10
    },
    title: {
        fontSize: 10,
        fontFamily: FONTS.BOLD,
        color: COLORS.PRIMARY,
        fontWeight: '800'
    }
})