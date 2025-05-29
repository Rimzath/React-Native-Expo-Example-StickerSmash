import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  image:{
    width:320,
    height:440,
    borderRadius:18,
  },
  imageContainer:{
    flex:1,
  },

});