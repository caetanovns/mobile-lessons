import { FlatList, ScrollView, StyleSheet, View, Us } from "react-native";
import StorieItem from "./storie-item";
import { useState , useEffect} from "react";

import profile_mock from '../../../../mocks/profiles';

export default function Stories() {

    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch(`https://my-json-server.typicode.com/caetanovns/demo/users/1`)
        .then(response => response.json())
        .then(data => setData(data))
    },[])

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.stories}
                renderItem={({ item }) => <StorieItem name={item.username} photo={item.photo} has_storie={item.has_storie} />}
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
