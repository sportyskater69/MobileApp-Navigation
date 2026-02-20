import { View } from "react-native";
import InstagramScreen from "../../../components/bottompart";
import HeaderRow from "../../header";

export default function Profile() {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffff" }}>
            <HeaderRow />
            <InstagramScreen />
        </View>
    );
}