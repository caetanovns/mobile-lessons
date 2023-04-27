import { useRoute, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import phone_hang_up from "../../../assets/icons/phone_hang_up.png";
import phone_mic from "../../../assets/icons/phone_mic.png";
import phone_mic_selected from "../../../assets/icons/phone_mic_selected.png";
import phone_paused from "../../../assets/icons/phone_paused.png";
import phone_paused_selected from "../../../assets/icons/phone_paused_selected.png";
import phone_volume_up from "../../../assets/icons/phone_volume_up.png";
import phone_volume_up_selected from "../../../assets/icons/phone_volume_up_selected.png";

export default function Caller() {

    const router = useRoute();
    const navigation = useNavigation();

    const { photo, name, phone } = router.params;

    const [mic, setMic] = useState(true);
    const [pause, setPause] = useState(true);
    const [volume, setVolume] = useState(true);

    return (
        <View style={styles.screen}>
            <Text style={[styles.text]}> Ligando </Text>
            <View>
                <Image source={photo} style={styles.image} />
                <Text style={[styles.text, { fontWeight: 'bold' }]}> {name}</Text>
                <Text style={styles.text}> {phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => { setMic(!mic) }}>
                    <Image source={mic == true ? phone_mic : phone_mic_selected} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPause(!pause) }}>
                    <Image source={pause == true ? phone_paused : phone_paused_selected} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setVolume(!volume) }}>
                    <Image source={volume == true ? phone_volume_up : phone_volume_up_selected} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('contacts') }}>
                    <Image source={phone_hang_up} />
                </TouchableOpacity>
            </View>
            <Image />
        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between'
    },
    container: {
        margin: 20
    },
    image: {
        borderRadius: 250,
        alignSelf: 'center'
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center'
    }
});