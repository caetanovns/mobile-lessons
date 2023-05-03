import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../pages/profile";
import { useContext } from "react";
import AuthContext from "./auth_context";
import { Alert, Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();


function CustomDrawerContent(props) {

    const { signOut } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={() => {
                Alert.alert('Sair', 'Deseja realmente sair?', [
                    {
                        text: 'Cancelar',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => signOut() },
                ]);
            }} />
        </DrawerContentScrollView>
    );
}

function Settings() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Profile"
                onPress={() => {}}
            />
        </View>
    );
}

export default function ProfileDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{headerShown: false, drawerPosition: 'right'}}>
            <Drawer.Screen
                name="Profile" component={Profile} />
            <Drawer.Screen
                name="Settings" component={Settings} />

        </Drawer.Navigator>
    )
}