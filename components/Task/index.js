import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";

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
        <Button
          containerStyle={{
            borderRadius: 4,
            width: 50,
          }}
          buttonStyle={{ backgroundColor: "transparent" }}
          onPress={onDeleteTask}
        >
          <Ionicons name="md-remove-circle" size={32} color="red" />
        </Button>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
