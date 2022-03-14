import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    word: {
        marginTop: 30,
        marginHorizontal: 3,
        color: COLORS.LIGHT,
        fontSize: 24
      },
      missingWord: {
        fontWeight: '800',
        textDecorationLine: 'underline'
      },
      translate: {
        marginTop: 50,
        marginHorizontal: 3,
        color: COLORS.LIGHT,
        fontWeight: '300',
        letterSpacing: 0.5,
        fontSize: 16
      },
})