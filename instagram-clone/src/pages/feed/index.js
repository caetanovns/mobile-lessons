import { FlatList, View } from "react-native";
import Stories from "./components/stories";
import TopContainer from "./components/top-container";

import Post from "./components/post";
import {useEffect, useState} from "react";
import api from "../../services/api";


export default function Feed() {

    const [UserPosts, setUserPosts] = useState()

    useEffect(()=> {
        api.get("/users").then((data) => {
            setUserPosts(data.data[0].feed)
            }
        )
    }, []);


    return (
        <View style={{ backgroundColor: 'white', marginBottom: 18}}>
            <TopContainer />
            <FlatList
                data={UserPosts}
                ListHeaderComponent={
                    <>
                        <Stories />
                    </>
                }
                renderItem={({ item }) => <Post liked={item.liked} username={item.username} location={item.location} comment={item.comment} photo={item.photo} profile_photo={item.profile_photo}/>}
            />
        </View>
    );
}
