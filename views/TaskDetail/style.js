import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
  },
  quare: {
    width: 48,
    height: 36,
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
  taskLabel: {
    marginTop: 15,
    marginBottom: 10,
  },
  submit: {
    marginTop: 50,
    // paddingHorizontal: 20,
    // width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
});

export default styles;
