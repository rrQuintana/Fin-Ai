import { ScrollView, View, Text } from "react-native";
import PageLayout from "@components/layout/PageLayout";
import FinancialCard from "@components/home/FinancialCard";
import Options from "@components/home/Options";
import Divider from "@components/general/Divider";
import RecentTransactions from "@components/home/RecentTransactions";
import DiscoverMore from "@components/home/DiscoverMore";
import { investmentProducts, learnData } from "src/utils/learn";
import { userCredit } from "@interfaces/userInterface";
import { sampleUser } from "@interfaces/UserDataInterface";
import { useGetAllCreditCards } from "@hooks/cards/credit/useGetAllCreditCards";

export default function Home() {
  const { data: creditCards, isLoading } = useGetAllCreditCards();
  const { data: debitAccounts, isLoading: isLoadingDebit } = useGetAllCreditCards();

  if(isLoading || isLoadingDebit) return <Text>Loading...</Text>;

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
            <FinancialCard userCredit={userCredit} />
            <Options />
            <Divider />
            <RecentTransactions
              max={2}
              sampleTransactions={[
              ...creditCards?.flatMap(card => card.transactions ?? []) ?? [],
              ...(debitAccounts?.flatMap(account => account.transactions ?? []) ?? []),
              ]}
            />
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
