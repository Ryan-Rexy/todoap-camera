import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskDetail from "./views/TaskDetail";
import Tasks from "./views/Tasks";
import CameraView from "./views/CameraView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Task List"} component={Tasks} />
        <Stack.Screen name={"Task Detail"} component={TaskDetail} />
        <Stack.Screen name={"Camera"} component={CameraView} />
      </Stack.Navigator>
      {/* <TasksView /> */}
    </NavigationContainer>
    // <View style={styles.container}>
    //   <View style={styles.body}>
    //     <Text style={styles.header}>Todo List</Text>
    //     <ScrollView style={styles.items}>
    //       {taskList.map((item, index) => {
    //         return (
    //           <Task
    //             key={index}
    //             item={item}
    //             number={index + 1}
    //             onDeleteTask={() => handleDeleteTask(item.id)}
    //           />
    //         );
    //       })}
    //     </ScrollView>
    //   </View>
    //   <Form />
    //   {/* <View style={styles.input}></View> */}
    // </View>
  );
}
