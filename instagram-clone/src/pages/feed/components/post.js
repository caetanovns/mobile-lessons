import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import profile from '../../../../assets/stories/caetano.jpg';

import MoreIcon from '../../../../assets/feed/more.svg';

import post from '../../../../assets/feed/post_example.png';

import LikeIcon from '../../../../assets/feed/like.svg';
import CommentIcon from '../../../../assets/feed/comment.svg';
import MessagerIcon from '../../../../assets/feed/messager.svg';

import SaveIcon from '../../../../assets/feed/save.svg';

export default function Post() {
    
    return (
        <View style={{ borderBottomColor: "#B3B3B3", borderBottomWidth: 0.5, paddingBottom: 10 }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={profile} style={styles.profile} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text_username}>segundo_caetano</Text>
                        <Text style={styles.text_location}>Crato, Ceará</Text>
                    </View>
                </View>
                <MoreIcon style={styles.more_icon} />
            </View>

            <Image source={post} style={styles.post} />

            <View style={styles.post_container}>
                <View style={styles.post_buttons_container}>
                    <TouchableOpacity onPress={() => { }}>
                        < LikeIcon style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                    < CommentIcon style={{ marginLeft: 20, marginRight: 20 }} />
                    <TouchableOpacity onPress={() => { }}>
                        < MessagerIcon style={{ marginTop: 1 }} />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity>
                    <SaveIcon style={{ marginRight: 5 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.post_comment_container}>
                <Image source={profile} style={styles.profile_comment} />
                <View style={{ flexDirection: 'row', marginTop: -2.5 }}>
                    <Text style={{ marginLeft: 5 }}>Liked by </Text>
                    <Text style={{ fontWeight: 'bold' }}>craig_love </Text>
                    <Text>and </Text>
                    <Text style={{ fontWeight: 'bold' }}>44,686 others </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'flex-start', marginLeft: 15 }}>
                <Text style={{ fontWeight: 'bold' }}>joshua_l</Text>
                <Text style={{ marginLeft: 5, flex: 1 }}>The in game in Japan was amazing and I want to share some photos</Text>
            </View>
        </ View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    post: {
        width: "100%",
        height: 375
    },
    post_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    post_buttons_container: {
        flexDirection: 'row',
    },
    text_username: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    text_location: {
        fontSize: 12,
    },
    profile: {
        width: 32,
        height: 32,
        borderRadius: 50,
    },
    profile_comment: {
        width: 17,
        height: 17,
        borderRadius: 50,
    },
    post_comment_container: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    more_icon: {
        marginTop: 10,
        marginRight: 10
    }
});