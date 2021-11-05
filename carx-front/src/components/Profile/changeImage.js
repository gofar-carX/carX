import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios'
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function ChangePhoto() {
  let [selectedImage, setSelectedImage] = React.useState(null);
    const uploadedImage = async()=>{ 
        try {
      const result =  axios.post("http://localhost:5000/users/upload")
      console.log(result)
    }catch(err){
        console.log("error uploading")
    }



    }

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
    }
    
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
        return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };


  return (
      
    <View style={styles.container}>
        
      <Text >
     {
     selectedImage==null ? 
      <EvilIcons name="user" size={160} color="black" />
      :<View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        </View>}  
      <TouchableOpacity onPress={openImagePickerAsync} >
      <MaterialCommunityIcons name="image-edit-outline" size={24} color="black" />  
          </TouchableOpacity>
      </Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 125,
    height: 125,
    borderRadius:300,
  },
});
