import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ReelPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>

      <ImageBackground
        source={require("../assets/images/instagram-feed-layout-01.jpg")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        resizeMode="cover"
      />

      <View
        style={{
          position: "absolute",
          top: 50,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Ionicons name="camera-outline" size={26} color="white" />
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Reels
        </Text>
        <Feather name="send" size={24} color="white" />
      </View>

      <View
        style={{
          position: "absolute",
          right: 15,
          bottom: 120,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }}>
          <Ionicons name="heart-outline" size={30} color="white" />
          <Text style={{ color: "white", fontSize: 12, marginTop: 4 }}>
            12.4k
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
          <Text style={{ color: "white", fontSize: 12, marginTop: 4 }}>
            348
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="paper-plane-outline" size={28} color="white" />
          <Text style={{ color: "white", fontSize: 12, marginTop: 4 }}>
            Share
          </Text>
        </TouchableOpacity>
      </View>


      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 15,
          right: 80,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", marginBottom: 6 }}>
          @username
        </Text>
        <Text style={{ color: "white" }}>
          This is a sample reel caption ✨ #fun #reactnative
        </Text>
      </View>
    </View>
  );
}