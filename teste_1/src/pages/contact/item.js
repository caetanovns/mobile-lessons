import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import phoneIcon from "../../../assets/icons/phone.png";

export default function Item({ photo, name, phone }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => { navigation.navigate("caller", { photo, name, phone }) }}>
            <View style={styles.container}>
                <Image source={photo} style={styles.image} />
                <View style={styles.text}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
                    <Text style={{ marginTop: 5 }}>{phone}</Text>
                </View>
                <Image source={phoneIcon} style={styles.icon} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 64, height: 64, borderRadius: 30
    },
    icon: {
        width: 32,
        height: 32,
        marginTop: 10
    },
    text: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#F6F6F6",
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        borderRadius: 10
    }
});