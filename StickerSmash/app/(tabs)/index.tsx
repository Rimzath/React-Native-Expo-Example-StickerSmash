import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Text style={style.text}>Hello Rimzath</Text>
      
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    color:"white",
  },
  button:{
    fontSize: 20,
    textDecorationLine:"underline",
    color:"white",
  }

});