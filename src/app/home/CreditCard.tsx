import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

const Icon = ({ positive, title, value }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12, paddingHorizontal: 5 }}>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 16,
          backgroundColor: positive ? "#e0f7ea99" : "#ffebee99",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <Text style={{ color: positive ? "#06D001" : "#FF204E", fontSize: 20, fontWeight: "900" }}>
          {positive ? "+" : "-"}
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 12, fontWeight: "400", color: "#ccc", marginBottom: 2 }}>{title}</Text>
        <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff" }}>{value}</Text>
      </View>
    </View>
  );
};

export default function CreditCard() {
  return (
    <LinearGradient
      colors={["#1f1c2c", "#928dab"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientContainer}
    >
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{moment().format("MMMM-YYYY")}</Text>
        <Text style={styles.amountText}>$ 123,456.78</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon positive title="Ingresos" value="123,456.78" />
        <Icon positive={false} title="Gastos" value="123,456.78" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 25,
    padding: 20,
  },
  dateContainer: {
    alignItems: "center",
  },
  dateText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 5,
  },
  amountText: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,
  },
});