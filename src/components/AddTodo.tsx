import { Button, TextInput, View, StyleSheet } from "react-native";

export const AddTodo = () => {
  const pressed = () => console.log("pressed");

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" onPress={pressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
