import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useOnboardingStatus = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const hasLaunched = await AsyncStorage.getItem("hasLaunched");
      if (hasLaunched === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    };
    checkOnboardingStatus();
  }, []);

  // Function to manually set the onboarding status to false and save it in AsyncStorage
  const completeOnboarding = async () => {
    await AsyncStorage.setItem("hasLaunched", "true");
    setIsFirstLaunch(false); // Immediately update the state after completion
  };

  return { isFirstLaunch, completeOnboarding };
};