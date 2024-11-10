import { ScrollView, View, Text } from "react-native";
import PageLayout from "@components/layout/PageLayout";
import FinancialCard from "@components/home/FinancialCard";
import Options from "@components/home/Options";
import Divider from "@components/general/Divider";
import RecentTransactions from "@components/home/RecentTransactions";
import DiscoverMore from "@components/home/DiscoverMore";
import { investmentProducts, learnData } from "src/utils/learn";

export default function Home() {
  return (
    <PageLayout title="Finances" display={true}>
      <>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="px-4">
            <FinancialCard />
            <Options />
            <Divider />
            <RecentTransactions max={2}/>
          </View>
          <Divider />
          <DiscoverMore title="Investment products" data={investmentProducts} />
          <Divider />
          <DiscoverMore title="Financial Education" data={learnData} />
          <View style={{ height: 120 }} />
        </ScrollView>
      </>
    </PageLayout>
  );
}
