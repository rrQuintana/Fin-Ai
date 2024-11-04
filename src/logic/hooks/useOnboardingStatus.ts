import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useOnboardingStatus = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const hasLaunched = await AsyncStorage.getItem("hasLaunched");
      if (hasLaunched === null) {
        setIsFirstLaunch(true);
        await AsyncStorage.setItem("hasLaunched", "true");
      } else {
        setIsFirstLaunch(false);
      }
    };
    checkOnboardingStatus();
  }, []);

  return isFirstLaunch;
};
