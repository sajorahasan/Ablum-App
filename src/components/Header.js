// import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// create a component
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    height: 60,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// make the component available to other parts of the app
export default Header;
