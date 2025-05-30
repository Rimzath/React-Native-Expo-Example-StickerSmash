import { StyleSheet , View} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { ImageSourcePropType } from "react-native";
import * as MediaLibrary from 'expo-media-library';



const PlaceholderImage = require("../../assets/images/background-image.png")

export default function Index() {
  const[permissionResponse,requestPermission] = MediaLibrary.usePermissions();

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  useEffect(()=>{
    if(!permissionResponse?.granted){
      requestPermission();
    }
  },[]);
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
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };


  const onSaveImageAsync = async () => {
    //
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage ||PlaceholderImage}/>
        {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )}
      </View>

      {showAppOptions ?(<View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
        ) :(
        <View style={styles.footerContainer}>
        <Button
        onPress={pickImageAsync} 
        label="Choose photo" 
        theme="primary"
        />
        <Button label="Use these photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },

});