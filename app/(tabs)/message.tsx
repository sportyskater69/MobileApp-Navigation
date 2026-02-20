import { View } from "react-native";
import Messages from "../message_header";


export default function Message() {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffff" }}>
            <Messages />
        </View>
    );
}