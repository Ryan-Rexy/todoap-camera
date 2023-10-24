import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  quare: {
    width: 38,
    height: 28,
    borderRadius: 10,
    backgroundColor: "#53d6f2",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 16,
    fontWeight: 600,
    color: "white",
  },
  content: {
    width: "80%",
    fontSize: 16,
  },
  completed: {
    color: "#008000",
  },
  todo: {
    color: "red",
  },
});

export default styles;
