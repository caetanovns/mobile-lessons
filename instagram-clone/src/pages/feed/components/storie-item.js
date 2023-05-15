import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// import photo from "../../../../assets/feed/profile.png";
import StoryIcon from "../../../../assets/feed/story.svg";
import StoryVazio from "../../../../assets/profile/storyvazio.svg";
import { useState } from "react";


export default function StorieItem({ name, photo, has_storie }) {

    const [storie , setStorie] = useState(has_storie);

    return <TouchableOpacity onPress={()=>{setStorie(false)}}>
        <View style={{ marginRight: 15 }}>
            <Image source={photo} style={styles.profile} />
            {storie ? <StoryIcon style={styles.circle} width={78} height={78} /> :< StoryVazio style={styles.circle} width={78} height={78} /> }
            <Text style={styles.text}>{name}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    profile: {
        width: 68,
        height: 68,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 50
    },
    circle: {
        position: 'absolute',
    },
    text: {
        marginTop: 7,
        textAlign: 'center'
    }
});

// Esssa será a primeira versão do componente

// export default function StorieItem() {
//     return <TouchableOpacity>
//         <View style={{ marginRight: 15 }}>
//             <Image source={photo} style={styles.profile} />
//             <StoryIcon style={styles.circle} width={78} height={78} />
//             <Text style={styles.text}>username</Text>
//         </View>
//     </TouchableOpacity>
// }