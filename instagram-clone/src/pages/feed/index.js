import { FlatList, View } from "react-native";
import Stories from "./components/stories";
import TopContainer from "./components/top-container";
import axios from "axios";
import Post from "./components/post";
import AuthContext from '../../routes/auth_context'

import { useEffect, useState,useContext } from "react";


export default function Feed() {
    const {user, setUser} = useContext({});

    const  {isLogedIn} = useContext(AuthContext);
    
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
                        <Stories storiProp ={user.stories} />
                    </>
                }
                renderItem={({ item }) => <Post liked={item.liked} />}
            />
        </View>
    );
}