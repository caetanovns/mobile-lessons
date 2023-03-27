# Implementação de Rotas

## 1. Adicionar componente de rotas

- Para utilizarmos rotas no React Native, podemos reutilizar componentes já desenvolvidos e então incorporar em nosso projeto.
- Para isso, precisamos adicionar essas 3 bibliotecas

```js
"@react-navigation/bottom-tabs": "^6.5.2",
"@react-navigation/native": "^6.1.1",
```

- Para adicionar icones em nossas tabs, vamos adicionar esta biblioteca de icones.

```js
"react-native-ionicons": "^4.6.5",
```

- Para obter mais informações a respeito da navegação, acesse [React Navigation](https://reactnavigation.org/)

## 2. Tab Navigation

```js
export default function HomeScreenRouters() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="feed" component={Feed} />
            <Tab.Screen name="search" component={Search} />
            <Tab.Screen name="media" component={Media} />
            <Tab.Screen name="notification" component={Notification} />
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
    );
}
```

## 3. Stack Navigation

```js
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routers() {
    return <Stack.Navigator>
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home_screen_routers" component={HomeScreenRouters} />
    </Stack.Navigator>
}
```
