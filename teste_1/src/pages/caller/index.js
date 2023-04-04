import { useRoute } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Caller() {
    const router = useRoute();

    const { photo, name, phone } = router.params;

    return (
        <View style={styles.screen}>
            <Text style={[styles.text]}> Ligando </Text>
            <View style={styles.container}>
                <Image source={photo} style={styles.image} />
                <Text style={[styles.text, { fontWeight: 'bold' }]}> {name}</Text>
                <Text style={styles.text}> {phone}</Text>

                <Image />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        borderRadius: 120
    },
    text: {
        fontSize: 18,
    }
});