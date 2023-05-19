import { FlatList, View, Text } from "react-native";
import Stories from "./components/stories";
import TopContainer from "./components/top-container";
import axios from "axios";
import Post from "./components/post";
import AuthContext from '../../routes/auth_context'
import React,{ useEffect,useState,useContext } from "react";


export default function Feed() {
    const {user, setUser} = useState({});

    const  { isLogedIn } = useContext(AuthContext);
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://my-json-server.typicode.com/caetanovns/demo/users/' + isLogedIn,
        }).then((response) => {
            console.log(response.data)
            setUser(response.data)
        });
    }, []);

    
    
    return (
        
        <View style={{ backgroundColor: 'white' }}>
            console.log(user)
            <TopContainer />
            <FlatList
                
                data={user.feed}
                ListHeaderComponent={
                    <>
                        <Stories storiProp={user.stories} />
                    </>
                }
                renderItem={({ item }) => <Post liked={item.liked} 
                location={item.location}
                photo={item.photo}
                name={item.username} 
                profile_foto={profile_foto}
                comment={item.comment}
                />}
            />
        </View>
    );
}