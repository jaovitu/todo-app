import { StyleSheet, Text, View } from "react-native";
import { ITasks } from "../screens/Home";
import CheckboxTask from "./CheckboxTask";

interface ITasksProps {
  isChecked: Boolean;
  task: String;
  date: String;
  taskId: Number;
  tasksState: ITasks[];
  setTasksState: Function;
}

function TaskCard(props: ITasksProps) {

  const styles = StyleSheet.create({
    taskCardContainer: {
      backgroundColor: '#FFFFFF',
      borderBottomColor: 'rgba(102, 98, 222, 0.4)',
      borderBottomWidth: 2,
      padding: 10,
    },

    taskCardTop: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 5,
    },

    taskTextStyle: {
      color: 'rgba(140, 143, 143, 0.6)',
      fontSize: 16,
      marginLeft: 10,
    },

    taskCardBottom: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 5,
    },

    taskDateStyle: {
      color: 'rgba(140, 143, 143, 0.4)',
      fontSize: 14,
    },

    dateSideCircle: {
      backgroundColor: 'rgba(102, 98, 222, 0.8)',
      borderRadius: 5,
      height: 10,
      marginLeft: 5,
      width: 10,
    },
  });

  return (
    <>
      <View style={styles.taskCardContainer} >
        <View style={styles.taskCardTop} >
          <CheckboxTask isTaskChecked={props.isChecked} taskId={props.taskId} tasksState={props.tasksState} setTasksState={props.setTasksState} />
          <Text style={styles.taskTextStyle} >{props.task}</Text>
        </View>
        <View style={styles.taskCardBottom} >
          <Text style={styles.taskDateStyle} >{props.date}</Text>
          <View style={styles.dateSideCircle} ></View>
        </View>
      </View>
    </>
  );
}

export default TaskCard;
