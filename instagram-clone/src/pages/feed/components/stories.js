import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import StorieItem from "./storie-item";

import api from "../../../services/api";
import {useEffect, useState} from "react";


export default function Stories() {

    const [UserStories, setUserStories] = useState()

    useEffect(()=> {
        api.get("/users").then((data) => {
                setUserStories(data.data[0].stories)
            }
        )
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={UserStories}
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
