import { useContext } from "react";
import AuthContext from "../../routes/auth_context";
import { VStack, HStack, Text, Avatar, Button } from "native-base";
import { Feather, FontAwesome} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

import Oval1 from '../../../assets/profile/Oval.png';
import Oval2 from '../../../assets/profile/Oval-1.png';
import Oval3 from '../../../assets/profile/Oval-2.png';
import MoreIcon from '../../../assets/more.png';


export default function Profile() {
    const UserProfileData = [
        { label: 'Posts', number: 54 },
        { label: 'Followers', number: 834 },
        { label: 'Following', number: 162 }
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

    const { signOut } = useContext(AuthContext);

    return (
        <VStack flex={1} bg={'#FFFFFF'}>
            <VStack py={4} justifyContent={'flex-end'} alignItems={'flex-end'}>
                <HStack alignItems={'center'} justifyContent={'space-between'} w={'62%'} pr={'5%'}>
                    <TouchableOpacity>
                        <HStack alignItems={'center'} justifyContent={'flex-end'}>
                            <FontAwesome name='lock' size={24} color='black' />
                            <Text px={3}>jacob_w</Text>
                            <Feather name='chevron-down' size={24} color='black' />
                        </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Feather name='menu' size={24} color='black' />
                    </TouchableOpacity>
                </HStack>
            </VStack>

            <HStack justifyContent={'space-around'} marginLeft={3}>
                <Avatar source={{uri: 'https://via.placeholder.com/150'} } size={'xl'}>
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
                <Text>Jacob West</Text>
                <Text>Digital godies designer @pixellz</Text>
                <Text>Everything is designed.</Text>

                <Button _pressed={{ backgroundColor: 'gray.200' }} my={3} bg={'white'} borderWidth={1} borderColor={'gray.300'} py={2}>
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