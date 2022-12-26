import { StyleSheet, TouchableOpacity, View } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";

interface IHeaderProps {
  setIsFilterActive: Function,
}

function Header(props: IHeaderProps) {

  const [ isFiltering, setIsFiltering ] = useState(false);

  const styles = StyleSheet.create({
    headerContainer: {
      alignItems: 'flex-end',
      backgroundColor: 'rgba(102, 98, 222, 1)',
      justifyContent: 'center',
      padding: 15,
    },

    filteringButtonStyle: {
      color: isFiltering
        ? 'rgba(255, 255, 255, 1)'
        : 'rgba(255, 255, 255, 0.5)',

        marginRight: 10,
    },
  });

  const handleFilteringButtonPress = () => {
    setIsFiltering(!isFiltering);
    props.setIsFilterActive(!isFiltering);
  }

  return (
    <View style={styles.headerContainer} >
      <TouchableOpacity onPress={() => handleFilteringButtonPress()} >
        <FontAwesome5 style={styles.filteringButtonStyle} name='filter' size={24} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
