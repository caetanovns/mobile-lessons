import { createStackNavigator } from "@react-navigation/stack";
import Caller from "../pages/caller";
import Contacts from "../pages/contact";



const Stack = createStackNavigator();


export default function Router() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="contacts" component={Contacts} />
            <Stack.Screen name="caller" component={Caller} />
        </Stack.Navigator>
    );
}