import { Text, View, StyleSheet, Platform } from "react-native";

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>List todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: Platform.OS === "ios" ? 70 : 35,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 8,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
