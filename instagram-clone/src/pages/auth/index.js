import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import logo from "../../../assets/instagram_logo.png";
import profile_logo from "../../../assets/user.png";
import AuthContext from "../../routes/auth_context";

export default function Auth() {

    const navigation = useNavigation();

    const { signIn } = useContext(AuthContext);

    return <>
        <View style={styles.form_container}>
            <View style={styles.center_container}>
                <Image source={logo} style={styles.image_logo} />
            </View>

            <View style={styles.center_container}>
                <Image source={profile_logo} />
            </View>

            <TouchableOpacity style={styles.button_container} onPress={() => { signIn() }}>
                <Text style={styles.login_button}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('login', {
                    'user': 'teste',
                    'pass': 'teste'
                })
            }}>
                <View style={styles.center_container}>
                    <Text style={styles.text_color}>Switch accounts</Text>
                </View>
            </TouchableOpacity>

        </View>
        <View style={styles.footer}>
            <Text style={styles.signup_text}>Don't have an accounts?</Text>
            <Text style={[styles.signup_text, { opacity: 1, fontWeight: 'bold', marginLeft: 10 }]}>Sign up.</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    center_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 30
    },
    form_container: {
        flex: 1,
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
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        padding: 12.5,
        backgroundColor: '#3797EF',
        borderRadius: 4
    },
    text_color: {
        color: '#3797EF',
        fontWeight: 'bold'
    },
    signup_text: {
        color: "#262626",
        opacity: 0.4
    },
    footer: {
        flexDirection: "row",
        justifyContent: 'center',
        height: 84,
        paddingTop: 15,
        borderTopWidth: 0.5,
        borderTopColor: "#ccc"
    }
});