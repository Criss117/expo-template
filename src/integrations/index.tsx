import { HeroUIProvider } from "./hero-ui";

interface Props {
  children: React.ReactNode;
}

export function Integrations({ children }: Props) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
