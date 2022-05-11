import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";

export default function App() {
  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
