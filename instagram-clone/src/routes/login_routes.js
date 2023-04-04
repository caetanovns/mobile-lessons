import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";

import Auth from "../pages/auth";
import Login from "../pages/login";
import HomeScreenRouters from "./home_screen_routes";

const Stack = createStackNavigator();

const getIsSignedIn = () => {
    return false;
};

export default function LoginRouters() {

    const [isSignedIn, setisSignedIn] = useState(false);

    const LoginState = () => {
        return <Login onPress={() => {
            setisSignedIn(!isSignedIn);
        }} />
    };

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {isSignedIn ? (
                <>
                    <Stack.Screen name="home_screen_routers" component={HomeScreenRouters} />
                </>
            ) : (
                <>
                    <Stack.Screen name="auth" component={Auth} title={"asd"} />
                    <Stack.Screen name="login" component={LoginState} />
                </>
            )}
        </Stack.Navigator>
    );
}