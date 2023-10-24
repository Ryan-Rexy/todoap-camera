import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon, Switch } from "@rneui/themed";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { firebase } from "../../firebase/firebase.config";

import styles from "./style";
import { Button } from "@rneui/base";

const TaskDetail = () => {
  const [task, setTask] = useState({});
  const route = useRoute();
  const navigation = useNavigation();
  const { taskId } = route.params;
  console.log("PROPS" + taskId);
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
          console.log("todo2222", taskDetail);
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
        <View style={styles.image}>
          <Image src={task.image} style={styles.img} />
        </View>
        <Button
          containerStyle={{
            borderRadius: 4,
          }}
          title={"Take photo"}
          onPress={() => navigation.navigate("Camera", { taskId })}
        ></Button>
      </View>
      <View>
        <Button style={styles.submit} title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default TaskDetail;
