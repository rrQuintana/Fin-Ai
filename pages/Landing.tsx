import { View } from "react-native";
import { OnboardFlow } from 'react-native-onboard';
import { Image } from "react-native";
import goals from "@assets/images/landing/goals.png"
import payment from "@assets/images/landing/payment.png"
import progress from "@assets/images/landing/progress.png"


export default function Landing() {

  return (
    <View className="bg-[#231f20]}">
      <OnboardFlow pages={[
      {
        title: 'Define Your Financial Goals',
        subtitle: 'Set clear objectives, like saving for a house or preparing for retirement. Our financial assistant will help you create a personalized plan to achieve each goal.',
        imageUri: Image.resolveAssetSource(goals).uri
        
      },
      {
        title: 'Receive Smart Recommendations',
        subtitle: 'Discover financial products and personalized advice to improve your financial situation. The app analyzes your habits and needs to offer the best guidance.',
        imageUri: Image.resolveAssetSource(payment).uri
      },
      {
        title: 'Monitor Your Progress and Stay Focused',
        subtitle: 'With tracking tools and real-time alerts, you can see how you are progressing towards your goals and receive reminders to stay on track.',
        imageUri: Image.resolveAssetSource(progress).uri
      }
      ]}
      type='bottom-sheet' paginationColor="#000000" 
      paginationSelectedColor="#231f20" 
      primaryButtonStyle={{ backgroundColor: '#231f20'}} 
      titleStyle={{ color: '#231f20'}} 
      />
    </View>
  );
}