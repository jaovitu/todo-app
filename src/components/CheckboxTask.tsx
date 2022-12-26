import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ITasks } from "../screens/Home";

interface ICheckboxTask {
  isTaskChecked: Boolean;
  taskId: Number
  tasksState: ITasks[];
  setTasksState: Function;
}

function CheckboxTask(props: ICheckboxTask) {

  const styles = StyleSheet.create({
    checkboxTaskStyle: {
      backgroundColor: props.isTaskChecked ? 'rgba(102, 98, 222, 0.4)' : 'rgba(255, 255, 255, 1)',
      borderColor: props.isTaskChecked ? 'rgba(102, 98, 222, 1)' : 'rgba(140, 143, 143, 1)',
      borderRadius: 15,
      borderWidth: 3,
      height: 30,
      width: 30,
    },
  });

  function handleCheckTask() {
    props.setTasksState(
      props.tasksState.map(task => task.key === props.taskId ? { ...task, isChecked: !task.isChecked } : task)
    );
  }

  return (
    <>
      <TouchableOpacity onPress={() => handleCheckTask()} >
        <View style={styles.checkboxTaskStyle} ></View>
      </TouchableOpacity>
    </>
  );
}

export default CheckboxTask;
