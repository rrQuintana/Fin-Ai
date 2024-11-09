import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageLayout from "@components/layout/PageLayout";
import React, { useState } from "react";
import MySpending from "@components/transactions/MySpending";
import {
  ExpenseCategory,
  ExpenseCategoryInfo,
} from "@src/types/ExpenseCategory";
import Expense from "@components/transactions/Expense";
import RecentActivity from "@components/transactions/RecentActivity";
import CustomTouchable from "@components/general/CustomTouchable";

const sampleData = [
  {
    name: "Amazon",
    amount: 100,
    type: "Gasto",
    date: "2021-09-01",
    category: ExpenseCategoryInfo[ExpenseCategory.ONLINE_SHOPPING],
  },
  {
    name: "Uber",
    amount: 50,
    type: "Gasto",
    date: "2021-09-02",
    category: ExpenseCategoryInfo[ExpenseCategory.TRANSPORT_AND_VEHICLES],
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Ingreso",
    date: "2021-09-03",
    category: ExpenseCategoryInfo[ExpenseCategory.SAVINGS_AND_INVESTMENT],
  },
  {
    name: "Spotify",
    amount: 10,
    type: "Gasto",
    date: "2021-09-04",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Netflix",
    amount: 150000,
    type: "Gasto",
    date: "2021-09-05",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Amazon",
    amount: 100,
    type: "Gasto",
    date: "2021-09-01",
    category: ExpenseCategoryInfo[ExpenseCategory.ONLINE_SHOPPING],
  },
  {
    name: "Uber",
    amount: 50,
    type: "Gasto",
    date: "2021-09-02",
    category: ExpenseCategoryInfo[ExpenseCategory.TRANSPORT_AND_VEHICLES],
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Ingreso",
    date: "2021-09-03",
    category: ExpenseCategoryInfo[ExpenseCategory.SAVINGS_AND_INVESTMENT],
  },
  {
    name: "Spotify",
    amount: 10,
    type: "Gasto",
    date: "2021-09-04",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Netflix",
    amount: 15,
    type: "Gasto",
    date: "2021-09-05",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Amazon",
    amount: 100,
    type: "Gasto",
    date: "2021-09-01",
    category: ExpenseCategoryInfo[ExpenseCategory.ONLINE_SHOPPING],
  },
  {
    name: "Uber",
    amount: 50,
    type: "Gasto",
    date: "2021-09-02",
    category: ExpenseCategoryInfo[ExpenseCategory.TRANSPORT_AND_VEHICLES],
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Ingreso",
    date: "2021-09-03",
    category: ExpenseCategoryInfo[ExpenseCategory.SAVINGS_AND_INVESTMENT],
  },
  {
    name: "Spotify",
    amount: 10,
    type: "Gasto",
    date: "2021-09-04",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Netflix",
    amount: 15,
    type: "Gasto",
    date: "2021-09-05",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
];

export default function Transaction() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const [modalVisible, setModalVisible] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    name: "",
    amount: "",
    type: "Expense",
    date: "",
    category: ExpenseCategoryInfo[ExpenseCategory.ONLINE_SHOPPING],
  });

  const handleInputChange = (field: any, value: string) => {
    setNewTransaction({ ...newTransaction, [field]: value });
  };

  const handleSubmit = () => {
    // Aquí agregarías la lógica para actualizar el array de transacciones con la nueva entrada
    sampleData.push({
      ...newTransaction,
      amount: parseFloat(newTransaction.amount),
    });
    setModalVisible(false);
    console.log("Transaction added:", newTransaction);
  };

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
            <Expense data={sampleData} />
            <CustomTouchable
              text="Add transaction  +"
              color="#231f20"
              whiteText={true}
              onPress={() => setModalVisible(true)}
            />
            <MySpending data={sampleData} />
            <RecentActivity data={sampleData} />

            <Modal
              visible={modalVisible}
              animationType="slide"
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
                >
                  <Text className="text-xl text-center mb-4">
                    Agregar Transacción
                  </Text>

                  <TextInput
                    placeholder="Nombre"
                    value={newTransaction.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                    className="border-zinc-300 rounded-lg border p-4 mb-2"
                  />
                  <TextInput
                    placeholder="Monto"
                    keyboardType="numeric"
                    value={newTransaction.amount}
                    onChangeText={(text) => handleInputChange("amount", text)}
                    className="border-zinc-300 rounded-lg border p-4 mb-2"
                  />
                  <TextInput
                    placeholder="Fecha"
                    value={newTransaction.date}
                    onChangeText={(text) => handleInputChange("date", text)}
                    className="border-zinc-300 rounded-lg border p-4 mb-2"
                  />

                  <Button
                    title="Agregar"
                    onPress={() => setModalVisible(false)}
                  />
                  <Button
                    title="Cancelar"
                    onPress={() => setModalVisible(false)}
                    color="red"
                  />
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </>
    </PageLayout>
  );
}
