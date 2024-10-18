import {View, Pressable, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    onPress: () => void
}

export default function CircleButton({onPress}: Props) {
    return (
        <View style={styles.CircleButtonContainer}>
            <Pressable style={styles.circcleButton} onPress={onPress}>
            <MaterialIcons name="add" size={38} color="#25292e"/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
   CircleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderRadius: 42,
        backgroundColor: '#ffd33d',
        padding: 3,
    },
circcleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: 'white',
    }
})