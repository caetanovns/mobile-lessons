import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import photo from "../../../../assets/feed/profile.png";
import StoryIcon from "../../../../assets/feed/story.svg";

export default function StorieItem({ name, photo, has_storie, photos }) {
  const [viewStorie, setViewStorie] = useState(has_storie);
  const navigation = useNavigation();

  const navigateToStorieContainer = () => {
    navigation.navigate('StorieContainer', { 'photos': photos, 'name': name, 'photo': photo });
  };

  return (
    <TouchableOpacity onPress={navigateToStorieContainer}>
      <View style={{ marginRight: 15 }}>
        <Image source={{ uri: photo }} style={styles.profile} />
        {viewStorie ? (
          <View style={StyleSheet.absoluteFill}>
            <StoryIcon style={styles.circle} width={78} height={78} />
          </View>
        ) : null}
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: 68,
    height: 68,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 50,
  },
  circle: {
    position: 'absolute',
  },
  text: {
    marginTop: 7,
    textAlign: 'center',
  },
});
