import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 44,
    width: "80%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#21a3d0",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#21a3d0",
    borderWidth: 2,
    borderColor: "#eff7f8",
  },
  icon: {
    fontSize: 24,
    color: "#fff",
  },
});

export default styles;
