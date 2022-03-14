import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100%',
        backgroundColor: COLORS.SUCCESS,
        marginTop: '8%',
        borderRadius: 30,
        paddingTop: 35
    },
    childrenWrapper: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: COLORS.LIGHT,
        fontSize: 15,
        marginLeft: 45,
        fontWeight: '800',
        marginBottom: '1%'
    }
})