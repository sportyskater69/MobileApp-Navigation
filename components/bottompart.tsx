
import { Image, View } from "react-native";

export default function InstagramScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require("../assets/images/instagram-feed-layout-01.jpg")}
                style={{ width: 415, height: 520 }}
            />
        </View>
    );
};
