import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {PressableButton} from '../components';
import RNFS from 'react-native-fs';

function CameraScreen() {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const handleCapture = async () => {
    try {
      const data = await takePicture();

      const filePath = data.uri;
      const newFilePath = RNFS.ExternalCachesDirectoryPath + Date.now()+".jpeg";
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log(
            'Image moved from' + filePath + '--- to ---' + newFilePath,
          );
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <PressableButton
          title="Capture"
          textColor="#fff"
          background="#0099ff"
          onPress={handleCapture}
          customeStyle={{width: 140}}
        />
      </RNCamera>
    </View>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
});
