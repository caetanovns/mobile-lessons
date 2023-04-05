import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useMemo, useState } from "react";

import Auth from "../pages/auth";
import Login from "../pages/login";
import AuthContext from "./auth_context";
import HomeScreenRouters from "./home_screen_routes";

const Stack = createStackNavigator();

export default function LoginRouters() {

    const [isSignedIn, setisSignedIn] = useState(false);

    // Pode tentar recuperar o token, 
    // para que o usuário não precise 
    // logar novamente
    // useEffect(() => {
    //     setisSignedIn(true);
    // }, []);



    const authContext = useMemo(() => ({
        signIn: (data) => {
            setisSignedIn(true);
        },
        signOut: (data) => {
            setisSignedIn(false);
        }
    }), []);

    const LoginState = () => {
        return <Login onPress={() => {
            setisSignedIn(!isSignedIn);
        }} />
    };

    return (
        <AuthContext.Provider value={authContext}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {isSignedIn ? (
                    <>
                        <Stack.Screen name="home_screen_routers" component={HomeScreenRouters} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="auth" component={Auth} />
                        <Stack.Screen name="login" component={LoginState} />
                    </>
                )}
            </Stack.Navigator>
        </AuthContext.Provider>
    );
}