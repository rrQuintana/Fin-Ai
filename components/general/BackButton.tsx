import { View, TouchableOpacity } from "react-native";
import ArrowBack from "@assets/icons/ArrowBack.svg";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
    type Nav = {
        goBack:  () => void;
      };
    
      const { goBack } = useNavigation<Nav>();
  return (
    <View>
      <TouchableOpacity className="ml-4" onPress={goBack}>
        <ArrowBack />
      </TouchableOpacity>
    </View>
  );
}
