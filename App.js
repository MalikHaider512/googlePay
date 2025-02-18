import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GooglePaymentScreen } from "./src/screens";

export default function App() {
  return <GooglePaymentScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
