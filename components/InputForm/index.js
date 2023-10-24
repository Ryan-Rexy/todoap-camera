import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { firebase } from "../../firebase.config";
import styles from "./style";

const Form = () => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Vui lòng nhập công việc");
      return false;
    }

    setTask("");
    Keyboard.dismiss();

    firebase
      .firestore()
      .collection("todos")
      .add({
        title: task,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        completed: false,
      })
      .then(() => {
        setTask("");
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.addTask}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={8}
    >
      <TextInput
        placeholder="Add task"
        style={styles.input}
        onChangeText={(text) => setTask(text)}
        value={task}
      ></TextInput>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
