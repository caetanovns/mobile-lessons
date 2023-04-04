import { FlatList, View } from "react-native";
import Stories from "./components/stories";
import TopContainer from "./components/top-container";


import post_mock from '../../../mocks/posts';
import Post from "./components/post";


export default function Feed() {
    return (
        <View style={{ backgroundColor: 'white' }}>

            <FlatList
                data={post_mock}
                ListHeaderComponent={
                    <>
                        <TopContainer />
                        <Stories />
                    </>
                }
                renderItem={({ item }) => <Post liked={item.liked} />}
            />
        </View>
    );
}