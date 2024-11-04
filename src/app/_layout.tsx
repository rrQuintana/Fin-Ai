// src/app/_layout.tsx
import { useOnboardingStatus } from "@/logic/hooks/useOnboardingStatus";
import { Slot, Redirect } from "expo-router";

export default function Layout() {
  const isFirstLaunch = useOnboardingStatus();

  if (isFirstLaunch === null) return null;

  return isFirstLaunch ? <Redirect href="/onboarding" /> : <Slot />;
}
