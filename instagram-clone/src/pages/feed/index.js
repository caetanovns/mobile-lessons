import { FlatList, View } from "react-native";
import Stories from "./components/stories";
import TopContainer from "./components/top-container";
import { useState , useEffect , useContext} from "react";

import post_mock from '../../../mocks/posts';
import Post from "./components/post";


export default function Feed() {


    const [user, setUser] = useState([]);

    useEffect(()=> {
        fetch(`https://my-json-server.typicode.com/caetanovns/demo/users/1`)
        .then(response => response.json())
        .then(user => setUser(user))
        console.log(user.stories);
    },[])

    // "username": "Amigo 1",
    //             "location": "Juazeiro do Norte CE",
    //             "photo": "https://via.placeholder.com/550",
    //             "liked": false,
    //             "comment": {
    //                 "username": "Amigo 321",
    //                 "description": "Muito bacana esse #tbt"

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
                renderItem={({ item }) => <Post username={item.username} location={item.location} photo={item.photo}
                liked={item.liked} profile_photo= {item.profile_photo} comment= {item.comment}/>}
            />
        </View>
    );
}