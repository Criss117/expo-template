import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontsProvider } from "./fonts";
import { HeroUIProvider } from "./heroui";

export function Integrations({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView>
      <FontsProvider>
        <HeroUIProvider>{children}</HeroUIProvider>;
      </FontsProvider>
    </GestureHandlerRootView>
  );
}
