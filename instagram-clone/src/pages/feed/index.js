import { View } from "react-native";
import Stories from "./components/stories";
import TopContainer from "./components/top-container";

export default function Feed() {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TopContainer />
            <Stories />
        </View>
    );
}