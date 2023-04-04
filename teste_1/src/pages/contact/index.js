import { FlatList, StyleSheet, Text, View } from 'react-native';
import Item from './item';

import contacts_data from "../../mocks/contact";

export default function Contact() {
    return <View style={styles.container}>
        <FlatList
            data={contacts_data}
            renderItem={({ item }) => <Item photo={item.photo} name={item.name} phone={item.phone} />}
        />

    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1

    }
});