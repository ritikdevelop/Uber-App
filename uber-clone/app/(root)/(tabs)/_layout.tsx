import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabIcon = () => (
  <View>
    <View>
      <Image />
    </View>
  </View>
);
const Layout = () => (
  <Tabs
    initialRouteName="index"
    screenOptions={{
      tabBarActiveTintColor: "white",
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: () => <TabIcon />,
      }}
    />
  </Tabs>
);
