import { FlatList, View } from "react-native";
import Stories from "./components/stories";
import TopContainer from "./components/top-container";

import { useContext, useEffect, useState } from "react";
import AuthContext from "../../routes/auth_context";
import axios from "axios";
import Post from "./components/post";



export default function Feed() {

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
        <View style={{ backgroundColor: 'white' }}>
            <TopContainer />
            <FlatList
                data={user.feed}
                ListHeaderComponent={
                    <>
                        <Stories />
                    </>
                }
                renderItem={({ item }) => <Post username={item.username} location={item.location} profile_photo={item.profile_photo} photo={item.photo} liked={item.liked} comment={item.comment} />}
            />
        </View>
    );
}