import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import CustomDropdown from "@components/general/CustomDropdown";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CreditCard from "@components/home/CreditCard";
import DebitAccount from "@components/home/DebitAccount";
import CustomInput from "@components/general/CustomInput";
import CustomTouchable from "@components/general/CustomTouchable";
import CustomRadio from "@components/general/CustomRadio";
import RecentTransactions from "@components/home/RecentTransactions";
import { DebitAccountInterface } from "@interfaces/DebitAccountInterface";
import { ColorOptions, CreditCardInterface, MonthDays } from "@interfaces/CreditCardInterface";
import { sampleUser } from "@interfaces/UserDataInterface";
import { useGetAllCreditCards } from "@hooks/cards/credit/useGetAllCreditCards";
import { useGetAllDebitAccounts } from "@hooks/cards/debit/useGetAllDebitAccounts";
import { useCreateCreditCard } from "@hooks/cards/credit/useCreateCreditCard";
import { useCreateDebitAccount } from "@hooks/cards/debit/useCreateDebitAccount";

export default function Cards() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();
  const { data: creditCards, isLoading } = useGetAllCreditCards();
  const creditCardMutation = useCreateCreditCard();
  const debitAccountMutation = useCreateDebitAccount();
  const { data: debitAccounts, isLoading: isLoadingDebit } = useGetAllDebitAccounts();
  const [selectedOption, setSelectedOption] = useState("Cards");
  const [modalVisible, setModalVisible] = useState(false);
  const [cardModalVisible, setCardModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
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

  const handleCardPress = (item: any) => {
    setSelectedItem(item);
    setCardModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    clearForm();
  };

  const closeCardModal = () => {
    setCardModalVisible(false);
    setSelectedItem(null);
  };

  const createCard = () => {
    newCard.usedCredit = parseFloat(newCard.usedCredit.toString());
    newCard.creditLimit = parseFloat((newCard.creditLimit ?? 0).toString());
    creditCardMutation.mutate(newCard);
    closeModal();
  };

  const createAccount = () => {
    newAccount.balance = parseFloat(newAccount.balance.toString());
    debitAccountMutation.mutate(newAccount);
    closeModal();
  };

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
              <View className="w-5 items-center justify-center opacity-0"></View>
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
                <CustomRadio
                  isSmall
                  option1="Credit"
                  option2="Charge"
                  onPressOption1={() =>
                    setNewCard({ ...newCard, type: "Credit" })
                  }
                  onPressOption2={() =>
                    setNewCard({ ...newCard, type: "Charge" })
                  }
                />
                <CustomInput
                  placeholder="Bank Name"
                  value={newCard.bankName}
                  onChangeText={(text) =>
                    setNewCard({ ...newCard, bankName: text })
                  }
                  isFixedSize={true}
                />
                <CustomInput
                  placeholder="Card Name"
                  value={newCard.cardName}
                  onChangeText={(text) =>
                    setNewCard({ ...newCard, cardName: text })
                  }
                  isFixedSize={true}
                />
                <CustomInput
                  placeholder="Used Credit"
                  value={newCard.usedCredit}
                  onChangeText={(text) =>
                    setNewCard({ ...newCard, usedCredit: text })
                  }
                  isFixedSize={true}
                  keyboardType="numeric"
                />
                {newCard.type === "Credit" && (
                  <CustomInput
                    placeholder="Credit Limit"
                    value={newCard.creditLimit}
                    onChangeText={(text) =>
                      setNewCard({ ...newCard, creditLimit: text })
                    }
                    isFixedSize={true}
                    keyboardType="numeric"
                  />
                )}
                <CustomDropdown
                  data={MonthDays}
                  onChange={(value) =>
                    setNewCard({
                      ...newCard,
                      statementClosingDate: value.value,
                    })
                  }
                  placeholder="Statement Closing Date"
                />
                <CustomDropdown
                  data={MonthDays}
                  onChange={(value) =>
                    setNewCard({ ...newCard, paymentDueDate: value.value })
                  }
                  placeholder="Payment Due Date"
                />
                <CustomDropdown
                  data={ColorOptions}
                  onChange={(value) =>
                    setNewCard({ ...newCard, color: value.value })
                  }
                  placeholder="Color"
                />
              </>
            ) : (
              <>
                <CustomInput
                  placeholder="Bank Name"
                  value={newAccount.bankName}
                  onChangeText={(text) =>
                    setNewAccount({ ...newAccount, bankName: text })
                  }
                  isFixedSize={true}
                />
                <CustomInput
                  placeholder="Account Name"
                  value={newAccount.accountName}
                  onChangeText={(text) =>
                    setNewAccount({ ...newAccount, accountName: text })
                  }
                  isFixedSize={true}
                />
                <CustomInput
                  placeholder="Balance"
                  value={newAccount.balance}
                  onChangeText={(text) =>
                    setNewAccount({ ...newAccount, balance: text })
                  }
                  isFixedSize={true}
                  keyboardType="numeric"
                />
                <CustomDropdown
                  data={ColorOptions}
                  onChange={(value) =>
                    setNewAccount({ ...newAccount, color: value.value })
                  }
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
      <Modal
        visible={cardModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeCardModal}
      >
        <View className="w-full h-full bg-white bg-opacity-50">
          <View className=" pt-20 px-4">
            {selectedOption === "Cards" ? (
              <CreditCard card={selectedItem} index={0} />
            ) : (
              <DebitAccount account={selectedItem} index={0} />
            )}
            <ScrollView className="mt-5">
            <RecentTransactions max={4} hideButton sampleTransactions={selectedItem?.transactions}/>
            </ScrollView>
          </View>
          <View className="absolute bottom-5 w-full px-4">
          <CustomTouchable
                text='Close'
                whiteText={true}
                color='black'
                onPress={closeCardModal}
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
            creditCards.map((card, index) => (
              <CreditCard
                key={index}
                card={card}
                index={index}
                onPress={() => handleCardPress(card)}
              />
            ))}
          {selectedOption === "Accounts" &&
            debitAccounts.map((account, index) => (
              <DebitAccount
                key={index}
                account={account}
                index={index}
                onPress={() => handleCardPress(account)}
              />
            ))}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
