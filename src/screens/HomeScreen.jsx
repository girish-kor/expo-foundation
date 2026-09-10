import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-bold text-slate-900">
          React Native Foundation
        </Text>
        <Text className="mt-2 text-base text-slate-500">
          Expo SDK 57 · React Native 0.86 · NativeWind 4
        </Text>
      </View>
    </SafeAreaView>
  );
}
