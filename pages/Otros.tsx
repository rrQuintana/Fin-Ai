import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageLayout from "@components/layout/PageLayout";
import { useMemo } from "react";

export default function Maps() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();
  
  return (
    <PageLayout title="Otros">
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
