import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AddTaskButton from "../components/AddTaskButton";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

export interface ITasks {
  key: Number;
  task: String;
  isChecked: Boolean;
}

function Home() {

  const [tasks, setTasks] = useState<ITasks[]>([
    { key: 1, task: 'Task 1', isChecked: false },
    { key: 2, task: 'Task 2', isChecked: false },
    { key: 3, task: 'Task 3', isChecked: false },
  ]);

  const [ isFilterActive, setIsFilterActive ] = useState(false);
  const filteredTasks: ITasks[] = tasks.filter(task => !task.isChecked);

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
    },

    tasksContainer: {
      flex: 1,
    },

    modalContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      flex: 1,
      position: 'absolute',
    },
  });

  function handleAddTask() {
    setTasks(
      [ ...tasks, { key: tasks.length + 1, task: `Task ${tasks.length + 1}`, isChecked: false } ]
    );
  }

  return (
      <View style={styles.container} >
        <Header setIsFilterActive={setIsFilterActive}  />

        <ScrollView style={styles.tasksContainer} >

          {
            isFilterActive
              ? filteredTasks.map(task => (
                <TaskCard
                  key={`${task.key}`}
                  task={task.task}
                  isChecked={task.isChecked}
                  date={new Date().toLocaleDateString()}
                  taskId={task.key}
                  tasksState={tasks}
                  setTasksState={setTasks}
                />
              ))

              : tasks.map(task => (
                <TaskCard
                  key={`${task.key}`}
                  task={task.task}
                  isChecked={task.isChecked}
                  date={new Date().toLocaleDateString()}
                  taskId={task.key}
                  tasksState={tasks}
                  setTasksState={setTasks}
                />
              ))
          }
        </ScrollView>

        <AddTaskButton handlePress={handleAddTask} />

        <View style={styles.modalContainer} ></View>
      </View>
  );
}

export default Home;
