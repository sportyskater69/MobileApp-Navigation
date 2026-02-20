import { Image, TextInput, View } from "react-native";

export default function SearchBar() {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#EFEFEF",
                borderRadius: 20,
                marginHorizontal: 15,
                marginVertical: 10,
                paddingHorizontal: 10,
                height: 40,
            }}
        >
            <Image
                source={require("../assets/images/Search-Icon.png")}
                style={{ width: 18, height: 18, marginRight: 8, opacity: 0.6 }}
            />

            <TextInput
                placeholder="Search or ask Meta AI"
                placeholderTextColor="#8e8e8e"
                style={{ flex: 1 }}
                editable={false}
            />
        </View>
    );
}