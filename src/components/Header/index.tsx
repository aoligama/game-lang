import React from 'react'
import { 
    View, 
    Text,
    TouchableOpacity
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../theme'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../constants/navigation'

export function Header() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.HOME)}>
                <MaterialCommunityIcons name="home" size={25} color={COLORS.PRIMARY}/>
            </TouchableOpacity>
            
            <Text style={styles.title}>
                Translate It!
            </Text>
            <MaterialCommunityIcons name="home" size={35} color={COLORS.BACKGROUND}/>
        </View>
    )
}