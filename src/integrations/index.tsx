import { FontsProvider } from "./fonts";
import { HeroUIProvider } from "./heroui";

export function Integrations({ children }: { children: React.ReactNode }) {
  return (
    <FontsProvider>
      <HeroUIProvider>{children}</HeroUIProvider>;
    </FontsProvider>
  );
}
