
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function HeaderRow() {
    return (
        <View
            style={{}}>
            <View
                style={{
                    flexDirection: "row",
                }}>
                <Pressable onPress={() => { }}>
                    <Text
                        style={{
                            fontSize: 50,
                            marginLeft: 20,
                            marginRight: 50,
                            marginTop: 10
                        }}>
                        {"<"}
                    </Text>
                </Pressable>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        marginTop: 25
                    }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Group Profile</Text>
                    <Text style={{ color: "grey" }}>ootd_everyday</Text>
                </View>
                <Text style={{ marginLeft: 80, marginRight: 15, marginTop: 25, marginBottom: 20, fontSize: 30 }}>+</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                }}>
                <Image source={require("../assets/images/profile-photo.png")}
                    style={{ height: 100, width: 100, marginLeft: 10 }} />
                <View style={{ marginLeft: 30, padding: 15, marginTop: 15 }}>
                    <Text style={{ marginLeft: 8, fontSize: 20, fontWeight: "bold" }}>53</Text>
                    <Text style={{ fontSize: 16 }}>Posts</Text>
                </View>
                <View style={{ padding: 15, marginTop: 15 }} >
                    <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: "bold" }}>12</Text>
                    <Text style={{ fontSize: 16 }}>Members</Text>
                </View>
                <View style={{ padding: 15, marginTop: 15 }}>
                    <Text style={{ marginLeft: 22, fontSize: 20, fontWeight: "bold" }}>1</Text>
                    <Text style={{ fontSize: 16 }}>Admins</Text>
                </View>
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
                <Text style={{ fontWeight: "bold" }}>OOTD Everyday</Text>
                <Text>Fit check!</Text>
                <Text>You know we&apos;ll hype you up.</Text>
            </View>
            <View style={{ margin: 15 }}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        backgroundColor: 'white',
                        borderColor: 'grey',
                        borderWidth: 1,
                        paddingVertical: 5,
                        paddingHorizontal: 20,
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: '500',
                        }}
                    >
                        Member v
                    </Text>
                </TouchableOpacity>
            </View>


        </View >
    );
}