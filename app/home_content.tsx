import { Ionicons } from "@expo/vector-icons";
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";

type User = {
    id: string;
    name: string;
    avatar: any;
};

type Posts = {
    id: string;
    user: User;
    image: any;
    description: string;
    likes: number;
    comments: number;
}

const users: User[] = [
    {
        id: "1",
        name: "Alex",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "2",
        name: "Jenna",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "3",
        name: "Marcus",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "4",
        name: "James",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "5",
        name: "Mike",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "6",
        name: "Aiden",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "7",
        name: "Cindy",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "8",
        name: "Sarah",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "9",
        name: "George",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "10",
        name: "Josh",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "11",
        name: "Melinda",
        avatar: require("../assets/images/profile-photo.png"),
    },
    {
        id: "12",
        name: "Mary",
        avatar: require("../assets/images/profile-photo.png"),
    },
];

const posts: Posts[] = [
    {
        id: "1",
        user: users[0],
        image: require("../assets/images/instagram-feed-post.png"),
        description: "Had a great day at the park!",
        likes: 120,
        comments: 10,
    },
    {
        id: "2",
        user: users[1],
        image: require("../assets/images/instagram-feed-post.png"),
        description: "Coffee and coding ☕️💻",
        likes: 250,
        comments: 20,
    },
    {
        id: "5",
        user: users[4],
        image: require("../assets/images/instagram-feed-post.png"),
        description: "Beautiful sunset tonight 🌅",
        likes: 340,
        comments: 30,
    },
];

const screenWidth = Dimensions.get("window").width;

export default function HomeContent() {
    return (
        <View>
            <FlatList
                data={users}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 15 }}
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
                        <Text style={{ fontSize: 12, marginTop: 5 }}>{item.name}</Text>
                    </View>
                )}
            />
            <View style={{ marginTop: 10, borderWidth: 1 }}></View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 20 }}>
                        <View style={{ position: "relative" }}>
                            <Image
                                source={item.image}
                                style={{ width: screenWidth, height: 500 }}
                                resizeMode="cover"
                            />

                            <View
                                style={{
                                    position: "absolute",
                                    top: 10,
                                    left: 10,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    padding: 5,
                                    borderRadius: 20,
                                }}
                            >
                                <Image
                                    source={item.user.avatar}
                                    style={{ width: 30, height: 30, borderRadius: 17 }}
                                />
                                <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 8 }}>
                                    {item.user.name}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: 5,
                                paddingVertical: 10,
                            }}
                        >
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                                <Ionicons name="heart-outline" size={22} color="black" />
                                <Text style={{ marginLeft: 6, fontWeight: "bold" }}>
                                    {item.likes}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                                <Ionicons name="chatbubble-outline" size={22} color="black" />
                                <Text style={{ marginLeft: 6 }}>
                                    {item.comments}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Ionicons name="paper-plane-outline" size={22} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingHorizontal: 10 }}>
                            <Text>
                                <Text style={{ fontWeight: "bold" }}>{item.user.name} </Text>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}