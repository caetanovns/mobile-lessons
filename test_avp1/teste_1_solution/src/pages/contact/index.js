import { FlatList, StyleSheet, Text, View } from 'react-native';
import Item from './item';

import contacts_data from "../../mocks/contact";

export default function Contact() {
    return <View style={styles.container}>
        <View style={styles.top}>
            <Text style={[styles.text, { fontSize: 32, marginLeft: 10, marginTop: 10, fontWeight: 'bold' }]}>Caller APP</Text>
            <View style={{ margin: 20 }}>
                <Text style={[styles.text, { fontWeight: 'bold', }]}>Olá, seja bem-vindo</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Ligue gratis para os seus amigos</Text>
            </View>
        </View>
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
    },
    top: {
        height: 150,
        backgroundColor: '#BDC3C7'
    },
    text: {
        color: 'white',

        fontSize: 20
    }
});