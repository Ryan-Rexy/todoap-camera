import { useNavigation, useRoute } from "@react-navigation/native";
import { Switch } from "@rneui/themed";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "@rneui/base";

import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from "react-native";

import { firebase } from "../../firebase.config";
import styles from "./style";

const TaskDetail = () => {
  const [task, setTask] = useState({});
  const route = useRoute();
  const navigation = useNavigation();
  const { taskId } = route.params;

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("todos")
      .orderBy("createdAt", "desc")
      .onSnapshot({
        next: (snapshot) => {
          const newTasks = snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data,
            };
          });
          const taskDetail = newTasks.find((item) => item.id === taskId);
          setTask(taskDetail);
        },
      });
    return () => unsubscribe();
  }, []);

  const handleSubmit = () => {
    firebase
      .firestore()
      .collection("todos")
      .doc(task.id)
      .update({
        title: task.title,
        completed: task.completed,
      })
      .then(() => {
        navigation.goBack();
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Image src={task.image} style={styles.img} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            containerStyle={{
              borderRadius: 4,
              width: 50,
            }}
            buttonStyle={{ backgroundColor: "transparent" }}
            onPress={() => navigation.navigate("Camera", { taskId })}
          >
            <Ionicons name="md-camera" size={32} color="gray" />
          </Button>
        </View>
      </View>
      <Text style={styles.taskLabel}>Task name</Text>
      <KeyboardAvoidingView
        style={styles.addTask}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={8}
      >
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTask({ ...task, title: text })}
          value={task.title || ""}
        ></TextInput>
      </KeyboardAvoidingView>
      <Text style={styles.taskLabel}>Task completed</Text>
      <Switch
        value={task.completed}
        onValueChange={(value) => setTask({ ...task, completed: value })}
      />
      <View>
        <Button
          style={styles.submit}
          buttonStyle={{ marginTop: 50, borderRadius: 24 }}
          title="Submit"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default TaskDetail;
