import { Pressable, Text, View } from "react-native";

export default function HomeHeader() {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                backgroundColor: "#fff",
                marginTop: 15
            }}
        >

            <Pressable onPress={() => { }}>
                <Text style={{ fontSize: 28 }}>+</Text>
            </Pressable>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 28, fontFamily: "cursive" }}>Instagram</Text>
                <Text style={{ fontSize: 20, marginLeft: 5, marginTop: 10 }}>v</Text>
            </View>

            <Pressable onPress={() => { }}>
                <Text style={{ fontSize: 25, marginTop: 10 }}>❤️</Text>
            </Pressable>
        </View>
    );
}