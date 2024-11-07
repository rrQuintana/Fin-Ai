import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, SafeAreaView, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { FinancialGoal, FinancialKnowledge, Occupation, SavingsPreference, YesNo, Gender, AgeRange } from "@/logic/types/UserOnboardingData";
import CustomSelectField from "@/components/CustomSelectField";
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get("window");

export default function OnboardingForm() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState<Occupation>();
  const [financialGoal, setFinancialGoal] = useState<FinancialGoal>();
  const [savesRegularly, setSavesRegularly] = useState<YesNo>();
  const [hasDebts, setHasDebts] = useState<number | string>('');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [monthlySavings, setMonthlySavings] = useState<string>('');
  const [financialKnowledge, setFinancialKnowledge] = useState<FinancialKnowledge>();
  const [savingsPreference, setSavingsPreference] = useState<SavingsPreference>();

  const router = useRouter();

  const questions = [
    {
      question: "¿Cuántos años tienes?",
      input: <CustomSelectField options={Object.values(AgeRange)} selected={age} onChange={setAge} />
    },
    {
      question: "¿Cuál es tu ocupación?",
      input: <CustomSelectField options={Object.values(Occupation)} selected={occupation} onChange={(option) => setOccupation(option as Occupation)} />
    },
    {
      question: "¿Cuál es tu objetivo financiero?",
      input: <CustomSelectField options={Object.values(FinancialGoal)} selected={financialGoal} onChange={(option) => setFinancialGoal(option as FinancialGoal)} />
    },
    {
      question: "¿Ahorras regularmente?",
      input: <CustomSelectField options={Object.values(YesNo)} selected={savesRegularly} onChange={(option) => setSavesRegularly(option as YesNo)} />
    },
    {
      question: "¿Cuánta deuda tienes?",
      input: (
        <TextInput
          value={hasDebts.toString()}
          onChange={(e) => setHasDebts(e.nativeEvent.text)}
          placeholder="500"
          keyboardType="numeric"
          className="border p-4"
          inputMode="numeric"
        />
      )
    },
    {
      question: "¿Cuánto ingreso percibes mensualmente?",
      input: (
        <TextInput
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.nativeEvent.text)}
          placeholder="500"
          keyboardType="numeric"
          className="border p-4"
          inputMode="numeric"
        />
      )
    },
    {
      question: "¿Cuánto ahorras mensualmente?",
      input: (
        <TextInput
          value={monthlySavings}
          onChange={(e) => setMonthlySavings(e.nativeEvent.text)}
          placeholder="500"
          keyboardType="numeric"
          className="border p-4"
        />
      )
    },
    {
      question: "¿Cuál es tu nivel de conocimiento financiero?",
      input: <CustomSelectField options={Object.values(FinancialKnowledge)} selected={financialKnowledge} onChange={(option) => setFinancialKnowledge(option as FinancialKnowledge)} />
    },
    {
      question: "¿Prefieres ahorrar a largo o corto plazo?",
      input: <CustomSelectField options={Object.values(SavingsPreference)} selected={savingsPreference} onChange={(option) => setSavingsPreference(option as SavingsPreference)} />
    }
  ];

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const userData = {
        age: Number(age),
        occupation,
        financialGoal,
        savesRegularly,
        hasDebts: hasDebts ? Number(hasDebts) : 0,
        monthlySavings: Number(monthlySavings),
        financialKnowledge,
        savingsPreference,
      };

      await AsyncStorage.setItem("userOnboardingData", JSON.stringify(userData));
      router.replace("/home");
    }
  };

  // Calculate the width for the progress bar based on current index
  const progressWidth = (width * (currentIndex + 1)) / questions.length;

  return (
    <SafeAreaView className="flex-1">
      <View className="p-5 flex flex-row items-center">
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back-sharp" size={20} />
        </TouchableOpacity>
        <View className="h-1 flex flex-row flex-1 mx-5">
          <View style={{ width: progressWidth }} className="h-1 bg-black"></View>
          <View className="h-1 w-1/2 bg-zinc-300"></View>
        </View>
      </View>
      <View className="px-4 flex flex-1">
        <Text className="text-3xl font-bold">{questions[currentIndex].question}</Text>
        <Text className="mb-5 mt-2">Esto nos ayuda a personalizar tu estrategia financiera.</Text>

        <View className="flex flex-grow justify-center">
          {questions[currentIndex].input}
        </View>

        <TouchableOpacity onPress={handleNext} className="bg-black p-5 rounded-full w-full mt-5 items-center">
          <Text className="text-white text-lg font-semibold">{currentIndex === questions.length - 1 ? "Finalizar" : "Siguiente"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
