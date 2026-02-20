import { View } from "react-native";
import Searcher from "../search_component";


export default function Search() {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffff" }}>
            <Searcher />
        </View>
    );
}