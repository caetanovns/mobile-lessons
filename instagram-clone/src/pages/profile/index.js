import { useContext, useEffect, useState } from "react";
import AuthContext from "../../routes/auth_context";
import { VStack, HStack, Text, Avatar, Button } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

import Oval1 from '../../../assets/profile/Oval.png';
import Oval2 from '../../../assets/profile/Oval-1.png';
import Oval3 from '../../../assets/profile/Oval-2.png';
import MoreIcon from '../../../assets/more.png';

import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Profile() {

    const [user, setUser] = useState({});

    const { isLogedIn } = useContext(AuthContext);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://my-json-server.typicode.com/caetanovns/demo/users/' + isLogedIn,
        }).then((response) => {
            setUser(response.data)
        });
    }, []);

    const UserProfileData = [
        { label: 'Posts', number: user.posts },
        { label: 'Followers', number: user.followers },
        { label: 'Following', number: user.following }
    ]

    const UserDestaquesData = [
        { label: 'new', img: MoreIcon },
        { label: 'Friends', img: Oval1 },
        { label: 'Sport', img: Oval2 },
        { label: 'Design', img: Oval3 },
        { label: 'Design', img: Oval3 },
        { label: 'Design', img: Oval3 },
        { label: 'Design', img: Oval3 },
        { label: 'Design', img: Oval3 },
        { label: 'Design', img: Oval3 }
    ]

    const navigator = useNavigation();

    return (
        <VStack flex={1} bg={'#FFFFFF'}>
            <VStack py={4} justifyContent={'flex-end'} alignItems={'flex-end'}>
                <HStack alignItems={'center'} justifyContent={'space-between'} w={'62%'} pr={'5%'}>
                    <TouchableOpacity>
                        <HStack alignItems={'center'} justifyContent={'flex-end'}>
                            <FontAwesome name='lock' size={24} color='black' />
                            <Text px={3}>{user.username}</Text>
                            <Feather name='chevron-down' size={24} color='black' />
                        </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigator.openDrawer() }}>
                        <Feather name='menu' size={24} color='black' />
                    </TouchableOpacity>
                </HStack>
            </VStack>

            <HStack justifyContent={'space-around'} marginLeft={3}>
                <Avatar source={{ uri: 'https://via.placeholder.com/150' }} size={'xl'}>
                    <Avatar.Badge bg="green.500" />
                </Avatar>
                <HStack justifyContent={'flex-end'} alignItems={'center'}>
                    {UserProfileData.map((item, index) => (
                        <VStack key={index} px={3}>
                            <Text textAlign={'center'} fontSize={22} bold>{item.number}</Text>
                            <Text textAlign={'center'} fontSize={16}>{item.label}</Text>
                        </VStack>
                    ))}
                </HStack>
            </HStack>

            <VStack pt={3} px={3} marginLeft={3}>
                <Text>{user.name}</Text>
                <Text>Digital godies designer @pixellz</Text>
                <Text>Everything is designed.</Text>
                <Button _pressed={() => { }} my={3} bg={'white'} borderWidth={1} borderColor={'gray.300'} py={2}>
                    <Text>Edit Profile</Text>
                </Button>
            </VStack>

            <HStack py={3}>
                <FlatList
                    data={UserDestaquesData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Avatar bg={'transparent'}
                        source={item.img}
                        size='lg' borderWidth={'1px'}
                        marginLeft={2.5}
                        borderColor={'gray.300'}
                        p={'2px'} />}
                />
            </HStack>
        </VStack>
    )
}