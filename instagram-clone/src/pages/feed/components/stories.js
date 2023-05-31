import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import StorieItem from "./storie-item";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../routes/auth_context";
import axios from "axios";

export default function Stories() {

    const [user, setUser] = useState({});

    const { isLogedIn } = useContext(AuthContext);
    

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://my-json-server.typicode.com/caetanovns/demo/users/' + isLogedIn,
        }).then((response) => {
            setUser(response.data)
        });
    }, []);
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={user.stories}
                renderItem={({ item }) => <StorieItem name={item.username} photo={item.photo} has_storie={item.has_storie} photos={item.photos} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        padding: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: "#B3B3B3"
    }
});
