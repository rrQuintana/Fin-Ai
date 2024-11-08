import { ScrollView } from "react-native";
import PageLayout from "@components/layout/PageLayout";
import PipaCard from "@components/pipascards/PipaCard";
export default function Home() {
  return (
    <PageLayout title="Busca tu pipa" location={true}>
      <>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          <PipaCard
            capacidad={10000}
            currency="MXN"
            price={643.5}
            best_seller
          />
          <PipaCard
            capacidad={7000}
            currency="MXN"
            price={643.5}
            best_seller={false}
          />
        </ScrollView>
      </>
    </PageLayout>
  );
}
