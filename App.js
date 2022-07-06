import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [number, setNumber] = React.useState(1);

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>{number}</Text>
      <Text>Write a number between 0-10 </Text>
      <TextInput
        style={styles.TextInputStyle}
        placeholder={"Number:"}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="check"
        style={styles.ButtonStyle}
        onPress={() => getRandomNumber()}
      />
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
    margin: 20,
    width: "80%",
  },
  ButtonStyle: {
    color: "blue",
  },
});
