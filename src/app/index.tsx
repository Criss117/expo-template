import { Button } from "heroui-native";
import "../globals.css";

import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="bg-red-500">
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Button>HEllo</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
