import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Entypo } from '@expo/vector-icons';

interface IAddTaskButton {
  handlePress: Function;
}

function AddTaskButton(props: IAddTaskButton) {

  const styles = StyleSheet.create({
    addTaskButtonStyle: {
      alignItems: 'center',
      backgroundColor: 'rgba(102, 98, 222, 1)',
      borderRadius: 30,
      height: 60,
      justifyContent: 'center',
      width: 60,
    },

    touchableOpacityStyle: {
      bottom: 25,
      position: 'absolute',
      right: 25,
      zIndex: 2,
    },
  });

  return (
    <>
      <TouchableOpacity style={styles.touchableOpacityStyle} onPress={() => props.handlePress()} >
        <View style={styles.addTaskButtonStyle} >
          <Entypo name="plus" size={28} color='#FFFFFF' />
        </View>
      </TouchableOpacity>
    </>
  );
}

export default AddTaskButton;
