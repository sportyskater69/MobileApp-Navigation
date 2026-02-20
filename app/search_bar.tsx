import { Image, TextInput, View } from "react-native";

export default function SearchBar() {
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#EFEFEF",
                    borderRadius: 20,
                    marginHorizontal: 15,
                    marginTop: 40,
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    height: 40,
                }}
            >
                <Image
                    source={require("../assets/images/Search-Icon.png")}
                    style={{ width: 25, height: 25, marginRight: 8, opacity: 0.6 }}
                />

                <TextInput
                    placeholder="Search or ask Meta AI"
                    placeholderTextColor="#8e8e8e"
                    style={{ flex: 1 }}
                    editable={false}
                />
            </View>
        </View>
    );
}