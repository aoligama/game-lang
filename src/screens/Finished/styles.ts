import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.LIGHT,
    marginVertical: 20,
    marginBottom: 50
  }
})