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
          title: 'Define tus Metas Financieras',
          subtitle: 'Establece objetivos claros, como ahorrar para una casa o prepararte para el retiro. Nuestro asistente financiero te ayudará a crear un plan personalizado para alcanzar cada meta.',
          imageUri: Image.resolveAssetSource(goals).uri
          
        },
        {
          title: 'Recibe Recomendaciones Inteligentes',
          subtitle: 'Descubre productos financieros y consejos personalizados para mejorar tu situación financiera. La app analiza tus hábitos y necesidades para ofrecerte la mejor orientación.',
          imageUri: Image.resolveAssetSource(payment).uri
        },
        {
          title: 'Monitorea tu Progreso y Mantente Enfocado',
          subtitle: 'Con herramientas de seguimiento y alertas en tiempo real, podrás ver cómo avanzas hacia tus metas y recibir recordatorios para mantenerte en el camino.',
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