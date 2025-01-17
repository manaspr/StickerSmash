import {Text, Pressable, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    onPress: () => void
    label: string
    icon: keyof typeof MaterialIcons.glyphMap
}

export default function IconButton({icon, label, onPress}: Props) {
    return (
        
            <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff"/>
            <Text style={styles.iconButtonLabel}>{label}</Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
   iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    },
iconButtonLabel: {
        color: 'white',
        marginTop: 12,
    }
})