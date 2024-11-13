import {
  View,
  Text,
  ScrollView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageLayout from "@components/layout/PageLayout";
import React, { useState } from "react";
import MySpending from "@components/transactions/MySpending";
import {
  ExpenseCategory,
  ExpenseCategoryArray,
  ExpenseCategoryInfo,
  IncomeCategory,
  IncomeCategoryInfo,
  IncomeCategoryArray
} from "@src/types/ExpenseCategory";
import Expense from "@components/transactions/Expense";
import RecentActivity from "@components/transactions/RecentActivity";
import CustomTouchable from "@components/general/CustomTouchable";
import CustomInput from "@components/general/CustomInput";
import CustomRadio from "@components/general/CustomRadio";
import { sampleTransactions, TransactionInterface, TransactionProps } from "@interfaces/TransactionInterface";
import CustomDropdown from "@components/general/CustomDropdown";
import { sampleUser } from "@interfaces/UserDataInterface";
import { userCredit } from "@interfaces/userInterface";

export default function Transaction() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("Expense");
  const [newExpense, setNewExpense] = useState<TransactionInterface>({
    name: "",
    amount: 0,
    type: "Expense",
    date: "",
    category: ExpenseCategoryInfo.ONLINE_SHOPPING,
  });
  const [newIncome, setNewIncome] = useState<TransactionInterface>({
    name: "",
    amount: 0,
    type: "Income",
    date: "",
    category: IncomeCategoryInfo.SALARY,
  });

  const handleExpenseChange = (key: string, value: string) => {
    setNewExpense({ ...newExpense, [key]: value });
  }

  const handleIncomeChange = (key: string, value: string) => {
    setNewIncome({ ...newIncome, [key]: value });
  }

  const handleAddExpense = () => {
    sampleExpenses: sampleTransactions.push({
      ...newExpense,
      amount: newExpense.amount,
    });
    setModalVisible(false);
  }

  const handleAddIncome = () => {
    sampleExpenses: sampleTransactions.push({
      ...newIncome,
      amount: newIncome.amount,
    });
    setModalVisible(false);
  }

  return (
    <PageLayout title="Transactions" display={true}>
      <>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className=" px-4">
            <Expense data={userCredit} transactions={[
              ...sampleUser.creditCards.flatMap(card => card.transactions ?? []),
              ...sampleUser.debitAccounts.flatMap(account => account.transactions ?? []),
              ]}/>
            <CustomTouchable
              text="Add transaction  +"
              color="#231f20"
              whiteText={true}
              onPress={() => setModalVisible(true)}
            />
            <MySpending data={sampleTransactions} />
            <RecentActivity data={[
              ...sampleUser.creditCards.flatMap(card => card.transactions ?? []),
              ...sampleUser.debitAccounts.flatMap(account => account.transactions ?? []),
              ]}/>
            <Modal
              visible={modalVisible}
              animationType="fade"
              transparent={true}
              onRequestClose={() => setModalVisible(false)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                  }}
                  className=" rounded-3xl"
                >
                  <Text className="text-xl text-center font-bold mb-4">
                    New transaction
                  </Text>
                  <CustomRadio
                    option1="Expense"
                    option2="Income"
                    onPressOption1={() => setSelectedType("Expense")}
                    onPressOption2={() => setSelectedType("Income")}
                  />
                  {selectedType === "Expense" ? (
                    <>
                      <CustomInput
                        placeholder="Starbucks Latte"
                        value={newExpense.name}
                        onChangeText={(value) => handleExpenseChange("name", value)}
                        isFixedSize={true}
                      />
                      <CustomInput
                        placeholder="8.45"
                        value={newExpense.amount.toString()}
                        onChangeText={(value) => handleExpenseChange("amount", value)}
                        isFixedSize={true}
                      />
                      <CustomInput
                        placeholder="Date"
                        value={newExpense.date}
                        onChangeText={(value) => handleExpenseChange("date", value)}
                        isFixedSize={true}
                      />
                      <CustomDropdown
                        data={ExpenseCategoryArray}
                        placeholder="Category"
                        onChange={(value) => handleExpenseChange("category", value.value)}
                      />
                    </>
                  ) : (
                    <>
                      <CustomInput
                        placeholder="Bonus"
                        value={newExpense.name}
                        onChangeText={(value) => handleIncomeChange("name", value)}
                        isFixedSize={true}
                      />
                      <CustomInput
                        placeholder="3500"
                        value={newExpense.amount.toString()}
                        onChangeText={(value) => handleIncomeChange("amount", value)}
                        isFixedSize={true}
                      />
                      <CustomInput
                        placeholder="Date"
                        value={newExpense.date}
                        onChangeText={(value) => handleIncomeChange("date", value)}
                        isFixedSize={true}
                      />
                      <CustomDropdown
                        data={IncomeCategoryArray}
                        placeholder="Category"
                        onChange={(value) => handleIncomeChange("category", value.value)}
                      />
                    </>
                  )}
                  <CustomTouchable
                    color="#231f20"
                    text="Add transaction"
                    whiteText={true}
                    onPress={() => setModalVisible(false)}
                  />
                </View>
              </View>
            </Modal>
          </View>
          <View style={{ height: 120 }} />
        </ScrollView>
      </>
    </PageLayout>
  );
}
