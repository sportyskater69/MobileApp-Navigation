

import { Alert, Button, Image, Pressable, View } from "react-native";



export default function BottomButtons() {

    const createTwoButtonAlert = () =>
        Alert.alert('Alert!', 'Alert button pressed!', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    return (
        <View style={{ marginBottom: 35 }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingHorizontal: 10
            }}>
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../assets/images/Home-Icon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </Pressable>
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../assets/images/Search-Icon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </Pressable>
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../assets/images/Reel-Icon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </Pressable>
                <Button
                    title="Alert"
                    onPress={createTwoButtonAlert}
                />
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../assets/images/Shop-Icon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </Pressable>
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../assets/images/Profile-Icon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </Pressable>
            </View>

        </View>
    )
}