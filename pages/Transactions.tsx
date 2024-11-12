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
  ExpenseCategoryInfo,
  IncomeCategory,
  IncomeCategoryInfo,
} from "@src/types/ExpenseCategory";
import Expense from "@components/transactions/Expense";
import RecentActivity from "@components/transactions/RecentActivity";
import CustomTouchable from "@components/general/CustomTouchable";
import CustomInput from "@components/general/CustomInput";
import CustomRadio from "@components/general/CustomRadio";
import { sampleTransactions, TransactionInterface, TransactionProps } from "@interfaces/TransactionInterface";

export default function Transaction() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const [modalVisible, setModalVisible] = useState(false);
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
        {/* <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 16 * 14,
            right: 20,
            width: 50,
            height: 50,
            backgroundColor: "black",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            zIndex: 1,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
            +
          </Text>
        </TouchableOpacity> */}
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className=" px-4">
            <Expense data={sampleTransactions}/>
            <CustomTouchable
              text="Add transaction  +"
              color="#231f20"
              whiteText={true}
              onPress={() => setModalVisible(true)}
            />
            <MySpending data={sampleTransactions} />
            <RecentActivity data={sampleTransactions} />

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
                    isSmall={true}
                    option1="Expense"
                    option2="Income"
                    onPressOption1={() => setNewExpense({ ...newExpense, type: "Expense" })}
                    onPressOption2={() => setNewExpense({ ...newExpense, type: "Income" })}
                  />
                  <CustomTouchable
                    color="#231f20"
                    text="Add transaction"
                    whiteText={true}
                    onPress={() => setModalVisible(false)}
                  />
                  <CustomTouchable
                    color="#ad2000"
                    whiteText={true}
                    text="Cancel"
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
