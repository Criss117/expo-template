import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Input } from "heroui-native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import "../globals.css";

export default function Index() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    AsyncStorage.getItem("messages")
      .then((m) => JSON.parse(m || "[]") as [string, string][])
      .then((m) => setMessages(new Map(m)));
  }, []);

  function clearMessages() {
    AsyncStorage.removeItem("messages").finally(() => setMessages(new Map()));
  }

  function handleAddMessage(message: string) {
    const key = Date.now().toString();

    AsyncStorage.setItem(
      "messages",
      JSON.stringify(Array.from(messages.set(key, message)))
    ).then(() => {
      setMessages(new Map(messages.set(key, message)));
      setMessage("");
    });
  }

  return (
    <View style={styles.container}>
      <Button onPress={clearMessages}>Limpiar</Button>
      <Text className="bg-red-500">
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Input
        className="w-full"
        placeholder="Type a message"
        onChangeText={setMessage}
        value={message}
      />
      <Button onPress={() => handleAddMessage(message)}>Guardar</Button>
      {Array.from(messages).map(([key, value]) => (
        <Text key={key}>{value}</Text>
      ))}
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
