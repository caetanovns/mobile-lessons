import { StyleSheet, View } from "react-native";


import CameraIcon from '../../../../assets/feed/camera.svg';
import InstagramIcon from '../../../../assets/feed/logo.svg';
import IgtvIcon from '../../../../assets/feed/igtv.svg';
import MessagerIcon from '../../../../assets/feed/messager.svg';

export default function TopContainer() {
    return <>
        <View style={styles.container}>
            <CameraIcon style={styles.camera_icon} />
            <View style={styles.right_content}>
                <IgtvIcon style={styles.igtv_icon} />
                <MessagerIcon style={styles.messager_icon} />
            </View>
        </View>
        <View style={styles.center_content}>
            <InstagramIcon style={styles.instagram_icon} />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#B3B3B3",
    },
    center_content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -35,
        paddingBottom: 7
    },
    right_content: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },
    camera_icon: {
        width: 24,
        height: 25,
        marginTop: 5,
        marginLeft: 5
    },
    instagram_icon: {
        width: 105,
        height: 30,
    },
    igtv_icon: {
        width: 24,
        height: 25,
        marginRight: 15
    },
    messager_icon: {
        width: 24,
        height: 21,
        marginTop: 3,
        marginRight: 5
    }
});