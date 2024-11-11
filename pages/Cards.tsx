import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import CustomDropdown from "@components/general/CustomDropdown";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CreditCard from "@components/home/CreditCard";
import { CreditCardInterface, MonthDays, ColorOptions } from "@interfaces/CreditCardInterface";
import DebitAccount from "@components/home/DebitAccount";
import { DebitAccountInterface } from "@interfaces/DebitAccountInterface";
import CustomInput from "@components/general/CustomInput";
import CustomTouchable from "@components/general/CustomTouchable";
import CustomRadio from "@components/general/CustomRadio";

const cards: CreditCardInterface[] = [
  {
    bankName: "Bank of America",
    type: "Credit",
    cardName: "Travel Rewards",
    usedCredit: 14000,
    creditLimit: 32000,
    statementClosingDate: 25,
    paymentDueDate: 15,
  },
  {
    bankName: "Chase",
    type: "Credit",
    cardName: "Freedom Unlimited",
    usedCredit: 20000,
    creditLimit: 55000,
    statementClosingDate: 20,
    paymentDueDate: 10,
    color: "blue",
  },
  {
    bankName: "American Express",
    type: "Charge",
    cardName: "Platinum Card",
    usedCredit: 12300,
    statementClosingDate: 29,
    paymentDueDate: 9,
    color: "gray",
  },
];
const accounts: DebitAccountInterface[] = [
  {
    bankName: "Chase",
    accountName: "Checking",
    balance: 14000,
    color: "blue",
  },
  {
    bankName: "Bank of America",
    accountName: "Savings",
    balance: 20000,
  },
  {
    bankName: "Wells Fargo",
    accountName: "Checking",
    balance: 12300,
    color: "red",
  },
];

export default function Cards() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();
  const [selectedOption, setSelectedOption] = useState("Cards");
  const [creditSelected, setCreditSelected] = useState("Credit");
  const [modalVisible, setModalVisible] = useState(false);
  const [newCard, setNewCard] = useState<CreditCardInterface>({
    bankName: "",
    type: "Credit",
    cardName: "",
    usedCredit: 0,
    statementClosingDate: 0,
    paymentDueDate: 0,
  });
  const [newAccount, setNewAccount] = useState<DebitAccountInterface>({
    bankName: "",
    accountName: "",
    balance: 0,
  });

  const clearForm = () => {
    setNewCard({
      bankName: "",
      type: "Credit",
      cardName: "",
      usedCredit: 0,
      statementClosingDate: 0,
      paymentDueDate: 0,
    });
    setNewAccount({
      bankName: "",
      accountName: "",
      balance: 0,
    });
  };

  const closeModal = () => {
    setModalVisible(false);
    clearForm();
  };

  const createCard = () => {
    newCard.usedCredit = parseFloat(newCard.usedCredit.toString());
    newCard.creditLimit = parseFloat((newCard.creditLimit ?? 0).toString());
    cards.push(newCard);
    closeModal();
  }

  const createAccount = () => {
    newAccount.balance = parseFloat(newAccount.balance.toString());
    accounts.push(newAccount);
    closeModal();
  }

  return (
    <SafeAreaView className="bg-[#231f20] flex-1 items-center justify-center">
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
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
            <View className="flex-row items-center justify-between px-4">
              <View
                className="w-5 items-center justify-center opacity-0"
              >
              </View>
              <Text className="text-[#231f20] text-center text-xl font-semibold">
                New {selectedOption === "Cards" ? "card" : "account"}
              </Text>
              <TouchableOpacity
                onPress={closeModal}
                className="h-10 items-center justify-center"
              >
                <Text className="text-[#231f20] text-xl">X</Text>
              </TouchableOpacity>
              
            </View>
            {selectedOption === "Cards" ? (
                <>
                  <CustomRadio isSmall option1="Credit" option2="Charge" onPressOption1={() => setNewCard({ ...newCard, type: "Credit" })} onPressOption2={() => setNewCard({ ...newCard, type: "Charge" })} />
                  <CustomInput placeholder="Bank Name" value={newCard.bankName} onChangeText={(text) => setNewCard({ ...newCard, bankName: text })} isFixedSize={true} />
                  <CustomInput placeholder="Card Name" value={newCard.cardName} onChangeText={(text) => setNewCard({ ...newCard, cardName: text })} isFixedSize={true} />
                  <CustomInput placeholder="Used Credit" value={newCard.usedCredit} onChangeText={(text) => setNewCard({ ...newCard, usedCredit: text })} isFixedSize={true} keyboardType="numeric"/>
                  { newCard.type === "Credit" && <CustomInput placeholder="Credit Limit" value={newCard.creditLimit} onChangeText={(text) => setNewCard({ ...newCard, creditLimit: text })} isFixedSize={true}  keyboardType="numeric"/> }
                  <CustomDropdown
                    data={MonthDays}
                    onChange={(value) => setNewCard({ ...newCard, statementClosingDate: value.value })}
                    placeholder="Statement Closing Date"
                  />
                  <CustomDropdown
                    data={MonthDays}
                    onChange={(value) => setNewCard({ ...newCard, paymentDueDate: value.value })}
                    placeholder="Payment Due Date"
                  />
                  <CustomDropdown
                    data={ColorOptions}
                    onChange={(value) => setNewAccount({ ...newAccount, color: value.value })}
                    placeholder="Color"
                  />
                </>
              ) : (
                <>
                  <CustomInput placeholder="Bank Name" value={newAccount.bankName} onChangeText={(text) => setNewAccount({ ...newAccount, bankName: text })} isFixedSize={true} />
                  <CustomInput placeholder="Account Name" value={newAccount.accountName} onChangeText={(text) => setNewAccount({ ...newAccount, accountName: text })} isFixedSize={true} />
                  <CustomInput placeholder="Balance" value={newAccount.balance} onChangeText={(text) => setNewAccount({ ...newAccount, balance: text })} isFixedSize={true} keyboardType="numeric" />
                  <CustomDropdown
                    data={ColorOptions}
                    onChange={(value) => setNewAccount({ ...newAccount, color: value.value })}
                    placeholder="Color"
                  />
                </>
              )}
            <CustomTouchable
              color="#231f20"
              text={`Add ${selectedOption === "Cards" ? "card" : "account"}`}
              whiteText={true}
              onPress={selectedOption === "Cards" ? createCard : createAccount}
            />
          </View>
        </View>
      </Modal>
      <View
        className="bg-white p-4 w-screen h-screen mt-32"
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <View className="flex-row items-center justify-between px-4 my-5">
          <TouchableOpacity
            onPress={() => navigate("Home")}
            className="w-10 h-10 items-center justify-center"
          >
            <Text className="text-[#231f20] text-3xl">←</Text>
          </TouchableOpacity>
          <Text className="text-[#231f20] text-center text-2xl font-semibold">
            {selectedOption}
          </Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className="w-10 h-10 items-center justify-center"
          >
            <Text className="text-[#231f20] text-3xl">+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          <CustomRadio
            option1="Cards"
            option2="Accounts"
            onPressOption1={() => setSelectedOption("Cards")}
            onPressOption2={() => setSelectedOption("Accounts")}
          />
          {selectedOption === "Cards" &&
            cards.map((card, index) => (
              <CreditCard key={index} card={card} index={index} />
            ))}
          {selectedOption === "Accounts" &&
            accounts.map((account, index) => (
              <DebitAccount key={index} account={account} index={index} />
            ))}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
