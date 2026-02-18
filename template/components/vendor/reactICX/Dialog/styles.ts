import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  trigger: {
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    gap: 16,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.light.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
    width: "100%",
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  cancelBtn: {
    backgroundColor: "#f5f5f5",
  },
  deleteBtn: {
    backgroundColor: COLORS.light.primary,
  },
  cancelText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "600",
  },
  deleteText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
