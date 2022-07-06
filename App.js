import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Type:</Text>
      <TextInput style={styles.TextInputStyle} placeholder={"Number:"} />
      <Button title="check" style={styles.ButtonStyle} />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInputStyle: {
    backgroundColor: "#F0EBE3",
    borderColor: "#E4DCCF",
    borderWidth: 3,
    borderRadius: 10,
    width: "100%",
  },
  ButtonStyle: {
    color: "blue",
  },
});
