import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Task = ({ item, number, onDeleteTask }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Task Detail", { taskId: item.id })}
    >
      <View style={styles.container}>
        <View style={styles.quare}>
          <Text style={styles.number}>{number}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.content}>{item.title}</Text>
          <Text style={item.completed ? styles.completed : styles.todo}>
            {item.completed === true ? "Completed" : "Todo"}
          </Text>
        </View>
        <Text style={{ color: "red" }} onPress={onDeleteTask}>
          Delete
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
