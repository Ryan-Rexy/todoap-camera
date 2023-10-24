import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 5,
  },
  taskLabel: {
    fontWeight: 600,
    fontSize: 40,
    color: "red",
  },
  content: {
    width: "80%",
    fontSize: 16,
  },
  input: {
    height: 44,
    width: "100%",
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
    borderRadius: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "gray",
    textAlign: "center",
    borderWidth: 8,
    borderColor: "#fff",
  },
  img: {
    borderRadius: 50,
    width: 90,
    height: 90,
  },
});

export default styles;
