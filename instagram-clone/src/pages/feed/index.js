import { FlatList, View } from "react-native";
import Stories from "./components/stories";
import TopContainer from "./components/top-container";
import { useState , useEffect} from "react";

import post_mock from '../../../mocks/posts';
import Post from "./components/post";


export default function Feed() {

    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch(`https://my-json-server.typicode.com/caetanovns/demo/users/1`)
        .then(response => response.json())
        .then(data => setData(data))
    },[])

    return (
        <View style={{ backgroundColor: 'white' }}>
            <TopContainer />
            <FlatList
                data={data.feed}
                ListHeaderComponent={
                    <>
                        <Stories />
                    </>
                }
                renderItem={({ item }) => <Post username={item.username} location={item.location} photo={item.photo} liked={item.liked} profile_photo= {item.profile_photo} comment={item.comment}/>}
            />
        </View>
    );
}