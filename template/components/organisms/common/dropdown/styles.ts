import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trigger: {
    padding: 8,
  },
  menu: {
    backgroundColor: "#fff",
    // alignItems: "flex-start",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#111",
    marginRight: 8,
  },
});

export default styles;
