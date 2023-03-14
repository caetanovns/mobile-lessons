import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import logo from "../../../assets/instagram_logo.png";
import profile_logo from "../../../assets/user.png";

export default function Auth() {
    return <>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={styles.container_logo}>
                <Image source={logo} style={styles.image_logo} />
            </View>
            <View style={styles.container_logo}>
                <Image source={profile_logo} />
            </View>
        </View>
        <TouchableOpacity style={styles.button_container}>
            <Text style={styles.login_button}>Log In</Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    container_logo: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image_logo: {
        marginBottom: 20
    },
    button_container: {
        paddingLeft: 40,
        paddingRight: 40,
    },
    login_button: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#3797EF',
        borderRadius: 10
    }
});