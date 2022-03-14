import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    alignContent: 'center',
    alignItems: 'center'
  },
  instructions: {
    color: COLORS.LIGHT,
    fontSize: 12,
    fontWeight: '200',
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
  groupItems: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})