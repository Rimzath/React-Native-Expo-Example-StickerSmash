import { View } from "react-native";
import { StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("../../assets/images/background-image.png")

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage ||PlaceholderImage}/>
      </View>

      {showAppOptions ?(<View/>) :(<View style={styles.footerContainer}>
        <Button
        onPress={pickImageAsync} 
        label="Choose photo" 
        theme="primary"
        />
        <Button label="Use these photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#25292e",
    flex: 1,
    alignItems: "center",
  },
  imageContainer:{
    flex:1,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: "center",
  },

});