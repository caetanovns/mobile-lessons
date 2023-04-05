import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

import instagram_logo from "../../../assets/instagram_logo.png";

import facebook_logo from "../../../assets/facebook.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import AuthContext from "../../routes/auth_context";


export default function Login({ onPress }) {

    const navigation = useNavigation();

    const route = useRoute();

    const { user, pass } = route.params;

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    return <>
        <View style={styles.form_container}>
            <View style={styles.center_container}>
                <Image source={instagram_logo} style={styles.image_logo} />
            </View>

            <View style={styles.center_container}>
                <TextInput style={styles.input} placeholder={"Username"} value={username} onChangeText={setUsername} />
            </View>

            <View style={styles.center_container}>
                <TextInput secureTextEntry={true} style={styles.input} placeholder={"Password"} value={password} onChangeText={setPassword} />
            </View>

            <Text style={styles.forgot_text}>Forgot Password?</Text>

            <TouchableOpacity style={styles.button_container}
                onPress={() => { signIn({ username, password }) }}>
                <Text style={styles.login_button}>Log In</Text>
            </TouchableOpacity>

            <View style={[styles.center_container, styles.facebook_container]}>
                <Image source={facebook_logo} style={{ marginRight: 10 }} />
                <Text style={styles.facebook_text}>Log in with Facebook</Text>
            </View>
        </View>
        <View style={styles.footer_container}>
            <Text style={styles.footer_text}> Instagram or Facebook</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    center_container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    form_container: {
        flex: 1,
        justifyContent: 'center',
    },
    button_container: {
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    image_logo: {
        marginBottom: 60
    },
    login_button: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        padding: 12.5,
        backgroundColor: '#3797EF',
        borderRadius: 4
    },
    input: {
        borderWidth: 1,
        width: "90%",
        height: 45,
        borderColor: 'rgba(0, 0,0,.1)',
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        paddingLeft: 20,
        margin: 5
    },
    forgot_text: {
        textAlign: 'right',
        marginRight: 20,
        marginTop: 10,
        color: "#3797EF",
        fontWeight: 'bold'
    },
    facebook_container: {
        margin: 50
    },
    facebook_text: {
        color: "#3797EF",
        fontWeight: 'bold'
    },
    footer_container: {
        height: 84,
        borderTopWidth: 0.5,
        borderTopColor: "#ccc",
    },
    footer_text: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: 0.4,
    }
});