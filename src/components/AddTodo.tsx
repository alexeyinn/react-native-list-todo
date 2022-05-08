import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";

export const AddTodo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const pressed = () => setTodos([...todos, "check"]);

  return (
    <View style={styles.block}>
      <View style={styles.inputView}>
        <TextInput style={styles.input} />
        <Button title="Добавить" onPress={pressed} />
      </View>
      {todos.map((item, index) => (
        <Text style={styles.todo} key={index}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 37,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
