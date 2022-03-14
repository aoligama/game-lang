import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLORS.BACKGROUND,
        paddingTop: getStatusBarHeight() + 12,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.PRIMARY
    },
})