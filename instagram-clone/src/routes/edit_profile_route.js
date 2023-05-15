import { createStackNavigator } from "react-navigation-stack";
import editProfile from "../pages/profile/editprofile";

const Stack = createStackNavigator();

export default function Edit(){
    return(
        <Stack.Navigator>

            <Stack.Screen
            name="editProfile"
            component = {editProfile}
            options={{headerShown:false}}
            />

        </Stack.Navigator>
    );
}