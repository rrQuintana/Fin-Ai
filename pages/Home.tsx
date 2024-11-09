import { ScrollView, View, Text } from "react-native";
import PageLayout from "@components/layout/PageLayout";
import CreditCard from "@components/home/CreditCard";
import Options from "@components/home/Options";
import Divider from "@components/general/Divider";
import RecentTransactions from "@components/home/RecentTransactions";
import DiscoverMore from "@components/home/DiscoverMore";
import { investmentProducts, learnData } from "src/utils/learn"

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
          <CreditCard />
          <Options />
          <Divider />
          <RecentTransactions />
          </View>
          <Divider />
          <DiscoverMore title='Investment products' data={investmentProducts} />
          <Divider />
          <DiscoverMore title='Financial Education' data={learnData} />
          </ScrollView>
      </>
    </PageLayout>
  );
}
