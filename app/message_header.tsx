import { FlatList, Image, Text, View } from "react-native";
import SearchBar from "./search_bar";

type Conversation = {
    id: string;
    name: string;
    message: string;
    avatar: any;
};

const conversations: Conversation[] = [
    {
        id: "1",
        name: "Alex",
        message: "Bro that fit is insane 🔥",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "2",
        name: "Jenna",
        message: "When are we posting?",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "3",
        name: "Marcus",
        message: "I sent the pics",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "4",
        name: "Alex",
        message: "Bro that fit is insane 🔥",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "5",
        name: "Jenna",
        message: "When are we posting?",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "6",
        name: "Marcus",
        message: "I sent the pics",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "7",
        name: "Jenna",
        message: "When are we posting?",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "8",
        name: "Marcus",
        message: "I sent the pics",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "9",
        name: "Jenna",
        message: "When are we posting?",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "10",
        name: "Marcus",
        message: "I sent the pics",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "11",
        name: "Jenna",
        message: "When are we posting?",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "12",
        name: "Marcus",
        message: "I sent the pics",
        avatar: require("../assets/images/profile-photo.png"),
    },
];

function MessageItem({ item }: { item: Conversation }) {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10
            }}
        >
            <Image
                source={item.avatar}
                style={{ width: 60, height: 60, borderRadius: 25 }}
            />

            <View style={{ marginLeft: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    {item.name}
                </Text>
                <Text style={{ color: "gray" }}>
                    {item.message}
                </Text>
            </View>
        </View>
    );
}


export default function Messages() {
    return (
        <View>
            <View style={{ alignItems: "center", marginTop: 20, marginBottom: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    OOTD Everyday v
                </Text>
            </View>
            <FlatList
                data={conversations}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MessageItem item={item} />}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListHeaderComponent={
                    <>
                        <SearchBar />
                        <FlatList
                            data={conversations}
                            horizontal
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            renderItem={({ item }) => (
                                <View style={{ alignItems: "center", marginRight: 15 }}>
                                    <Image
                                        source={item.avatar}
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 40,
                                        }}
                                    />
                                    <Text style={{ fontSize: 12, marginTop: 5 }}>
                                        {item.name}
                                    </Text>
                                </View>
                            )}
                        />

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: 10,
                            }}
                        >
                            <Text style={{ fontWeight: "bold" }}>Messages</Text>
                            <Text style={{ color: "grey" }}>Requests</Text>
                        </View>
                    </>
                }
            />
        </View>
    );
}