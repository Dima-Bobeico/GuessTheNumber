import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Type:</Text>
      <TextInput style={styles.TextInputStyle} placeholder={"Number:"} />
      <Button title="check" style={styles.ButtonStyle} />
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
    borderColor: "#000",
    padding: 30,
  },
  ButtonStyle: {
    color: "blue",
  },
});
