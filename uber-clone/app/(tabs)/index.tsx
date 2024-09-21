import { Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className={"text-red-500"}>
        Uber Clone!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


