import { Integrations } from "@/integrations";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Integrations>
      <Stack />
    </Integrations>
  );
}
