import { Alert, View } from "react-native";
import { Button } from "heroui-native/button";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Button onPress={() => Alert.alert("Hii")}>Get Started</Button>
    </View>
  );
}
