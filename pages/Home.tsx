import { ScrollView } from "react-native";
import PageLayout from "@components/layout/PageLayout";
export default function Home() {
  return (
    <PageLayout title="Mis finanzas">
      <>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
        </ScrollView>
      </>
    </PageLayout>
  );
}
