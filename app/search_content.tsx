import { Dimensions, Image, Pressable, Text, View } from "react-native";
import SearchBar from "./search_bar";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Searcher() {
  return (
    <View>
      <SearchBar />
      <View style={{ flexDirection: "row" }}>
        <View style={{
          marginLeft: 20,
          marginTop: 5,
          backgroundColor: "#040000",
          borderRadius: 10,
          paddingBottom: 8,
          paddingTop: 8,
          paddingRight: 9,
          paddingLeft: 9,
        }}>
          <Pressable>
            <Text style={{
              color: "#ffffff",
              fontWeight: "bold"
            }}>For you</Text>
          </Pressable>
        </View>
        <View style={{
          marginLeft: 10,
          marginTop: 5,
          borderRadius: 10,
          paddingBottom: 8,
          paddingTop: 8,
          paddingRight: 9,
          paddingLeft: 9,
          backgroundColor: "#EFEFEF",
        }}>
          <Pressable>
            <Text style={{ fontWeight: 'bold' }}>Memes</Text>
          </Pressable>
        </View>
        <View style={{
          marginLeft: 10,
          marginTop: 5,
          borderRadius: 10,
          paddingBottom: 8,
          paddingTop: 8,
          paddingRight: 9,
          paddingLeft: 9,
          backgroundColor: "#EFEFEF",
        }}>
          <Pressable>
            <Text style={{ fontWeight: 'bold' }}>Foodie</Text>
          </Pressable>
        </View>
        <View style={{
          marginLeft: 10,
          marginTop: 5,
          borderRadius: 10,
          paddingBottom: 8,
          paddingTop: 8,
          paddingRight: 9,
          paddingLeft: 9,
          backgroundColor: "#EFEFEF",
        }}>
          <Pressable>
            <Text style={{ fontWeight: 'bold' }}>Fitness Routine</Text>
          </Pressable>
        </View>
        <View style={{
          marginLeft: 10,
          marginTop: 5,
          borderRadius: 10,
          paddingBottom: 8,
          paddingTop: 8,
          paddingRight: 9,
          paddingLeft: 9,
          backgroundColor: "#EFEFEF",
        }}>
          <Pressable>
            <Text style={{ fontWeight: 'bold' }}>Travel</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Image source={require("../assets/images/search-feed.jpeg")}
          style={{ height: screenHeight, width: screenWidth, marginTop: 5 }} />
      </View>
    </View>
  );
}