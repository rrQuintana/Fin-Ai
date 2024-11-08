import { View } from "react-native";
import { OnboardFlow } from 'react-native-onboard';
import { Image } from "react-native";
import pipa from "@assets/images/landing/pipa.png"
import payment from "@assets/images/landing/payment.png"
import location from "@assets/images/landing/location.png"


export default function Landing() {

  return (
    <View className="bg-blue-500">
      <OnboardFlow pages={[
        {
          title: 'Elige la cantidad de agua',
          subtitle: 'La pipa de agua con la cantidad necesaria para tu hogar.',
          imageUri: Image.resolveAssetSource(pipa).uri
        },
        {
          title: 'Realiza el pago',
          subtitle: 'Paga de manera digital de forma segura en tan solo unos pasos.',
          imageUri: Image.resolveAssetSource(payment).uri
        },
        {
          title: 'Recibe tu agua',
          subtitle: 'Espera a que alguno de nuestros conductores llegue a tu domicilio con tu agua.',
          imageUri: Image.resolveAssetSource(location).uri
        }
      ]}
        type='bottom-sheet' paginationColor="#000000" 
        paginationSelectedColor="#1C759E" 
        primaryButtonStyle={{ backgroundColor: '#1C759E'}} 
        titleStyle={{ color: '#1C759E'}} 
      />
    </View>
  );
}