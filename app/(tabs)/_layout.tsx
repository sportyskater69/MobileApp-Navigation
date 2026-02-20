import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            initialRouteName="profile"
            screenOptions={{ headerShown: false }}>

            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require("../../assets/images/Home-Icon.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require("../../assets/images/Search-Icon.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="reels"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require("../../assets/images/Reel-Icon.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="shop"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require("../../assets/images/Shop-Icon.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require("../../assets/images/Profile-Icon.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}