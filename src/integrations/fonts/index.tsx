import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export const GeistFonts = {
  Thin: "geist-thin",
  ExtraLight: "geist-extralight",
  Light: "geist-light",
  Normal: "geist-normal",
  Medium: "geist-medium",
  SemiBold: "geist-semibold",
  Bold: "geist-bold",
  ExtraBold: "geist-extrabold",
  Black: "geist-black",
} as const;
export type GeistVariants = (typeof GeistFonts)[keyof typeof GeistFonts];

export function FontsProvider({ children }: { children: React.ReactNode }) {
  const [loaded, error] = useFonts({
    "geist-thin": require("../../../assets/fonts/Geist-Thin.ttf"),
    "geist-extralight": require("../../../assets/fonts/Geist-ExtraLight.ttf"),
    "geist-light": require("../../../assets/fonts/Geist-Light.ttf"),
    "geist-normal": require("../../../assets/fonts/Geist-Regular.ttf"),
    "geist-medium": require("../../../assets/fonts/Geist-Medium.ttf"),
    "geist-semibold": require("../../../assets/fonts/Geist-SemiBold.ttf"),
    "geist-bold": require("../../../assets/fonts/Geist-Bold.ttf"),
    "geist-extrabold": require("../../../assets/fonts/Geist-ExtraBold.ttf"),
    "geist-black": require("../../../assets/fonts/Geist-Black.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return children;
}
