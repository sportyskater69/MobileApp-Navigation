import { Image, Pressable, Text, View } from "react-native";

export default function Searcher() {
  return (
    <View>
      <Pressable onPress={() => { }}>
        <Text
          style={{
            marginTop: 40, fontSize: 15, marginLeft: 24
          }}>
          Search with Meta AI</Text>
      </Pressable>
      <View>
        <Image source={require("../assets/images/profile-photo.png")}
          style={{ height: 25, width: 25, marginLeft: 10 }} />
      </View>
    </View>
  );
}