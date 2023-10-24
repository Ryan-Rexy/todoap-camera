import { View, Text, Image, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import styles from "./style";
import { Button } from "@rneui/base";
import { useRoute } from "@react-navigation/native";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebase } from "../../firebase/firebase.config";

const CameraView = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const cameraRef = useRef();
  const route = useRoute();
  const { taskId } = route.params;

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      console.log("runnnnn", image);
      try {
        const response = await fetch(image);
        const blob = await response.blob();
        const filename = image.substring(image.lastIndexOf("/") + 1);
        await MediaLibrary.createAssetAsync(image);
        Alert.alert("Picture save");

        const storageRef = firebase.storage().ref();
        const upload = storageRef.child(`snapshot/${taskId}/${filename}`);
        await upload.put(blob);
        const url = await upload.getDownloadURL();

        firebase.firestore().collection("todos").doc(taskId).update({
          image: url,
        });

        ///////////
        // const filename = image.substring(image.lastIndexOf("/") + 1);
        // console.log("filename", filename);
        // const uploadUri =
        //   Platform.OS === "ios" ? image.replace("file://", "") : image;

        // // const refImage = ref(storage, `snapshot/${taskId}/${filename}`);
        // const ref2 = ref(storage, `snapshot/${taskId}/${filename}`);
        // await ref2.putFile(uploadUri);

        // const url = await ref.getDownloadURL();
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!hasCameraPermission)
    return (
      <View>
        <Text>No camera access</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ref={cameraRef}
        ></Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      {image ? (
        <Button onPress={saveImage}>Save</Button>
      ) : (
        <Button onPress={takePicture}> Take a picture</Button>
      )}
    </View>
  );
};

export default CameraView;
