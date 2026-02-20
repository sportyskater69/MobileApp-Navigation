import { View } from "react-native";
import HomeContent from "../home_content";
import HomeHeader from "../home_header";


export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffff" }}>
            <HomeHeader />
            <HomeContent />
        </View>
    );
}