import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface ITodo {
  id: number;
  title: string;
}

export const AddTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const pressed = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: +new Date(), title: inputValue.trim() }]);
      setInputValue("");
    } else {
      Alert.alert("Название дела, не может быть пустым!");
    }
  };

  return (
    <View style={styles.block}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Введите название вашего дела..."
          onChangeText={setInputValue}
          value={inputValue}
        />
        <Button title="Добавить" onPress={pressed} />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() =>
              setTodos((prev) => prev.filter((todo) => todo.id !== item.id))
            }
          >
            <Text style={styles.todo}>{item.title}</Text>
          </TouchableOpacity>
        )}
        style={styles.flatList}
      />
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
  flatList: {
    maxHeight: "90%",
  },
});
