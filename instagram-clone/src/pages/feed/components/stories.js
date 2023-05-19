import { FlatList, StyleSheet, View } from "react-native";
import StorieItem from "./storie-item";


export default function Stories(storiProp) {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={storiProp}
                renderItem={({ item }) => <StorieItem name={item.username} 
                photo={item.photo}
                 has_storie={item.has_storie} />}
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
