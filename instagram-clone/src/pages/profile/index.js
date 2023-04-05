import { useContext } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../../routes/auth_context";


export default function Profile() {

    const { signOut } = useContext(AuthContext);

    return <View style={{ backgroundColor: 'white' }}>
        <Button onPress={() => { signOut() }} title={"Logout"} />
    </View>
}