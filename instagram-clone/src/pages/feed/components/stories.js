import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import StorieItem from "./storie-item";

import profile_mock from '../../../../mocks/profiles';

export default function Stories() {
    return (
        // Será a primeira parte do componente
        // <View style={styles.container}>
        //     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        //         <StorieItem/>
        //         <StorieItem/>
        //         <StorieItem/>
        //         <StorieItem/>
        //     </ScrollView>
        // </View>

        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={profile_mock}
                renderItem={({ item }) => <StorieItem name={item.name} photo={item.photo} has_storie={item.has_storie} />}
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
