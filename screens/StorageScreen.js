import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import RNFS from 'react-native-fs';

const folderPath = RNFS.DocumentDirectoryPath + '/assets';

const makeDirectory = async folderPath => {
  await RNFS.mkdir(folderPath); //create a new folder on folderPath
};

const makeFile = async (filePath, content) => {
  try {
    //create a file at filePath. Write the content data to it
    await RNFS.writeFile(filePath, content, 'utf8');
    console.log('written to file');
  } catch (error) {
    //if the function throws an error, log it out.
    console.log(error);
  }
};

const deleteFile = async path => {
  try {
    await RNFS.unlink(path); //delete the item present at 'path'
    console.log('file deleted');
  } catch (error) {
    console.log(error);
  }
};

function StorageScreen() {
  const [downloadsFolder, setDownloadsFolder] = useState('');
  const [documentsFolder, setDocumentsFolder] = useState('');
  const [externalDirectory, setExternalDirectory] = useState('');

  const [fileData, setFileData] = useState();

  const [files, setFiles] = useState([]);

  const getFileContent = async path => {
    const reader = await RNFS.readDir(path);

    console.log(reader);
    setFiles(reader);
  };

  const readFile = async path => {
    const response = await RNFS.readFile(path);
    setFileData(response); //set the value of response to the fileData Hook.
  };

  const Item = ({name, isFile}) => {
    return (
      <View>
        <Text style={styles.name}>Name: {name}</Text>
        <Text> {isFile ? 'It is a file' : "It's a folder"}</Text>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text style={styles.title}>{index}</Text>
        {/* The isFile method indicates whether the scanned content is a file or a folder*/}
        <Item name={item.name} isFile={item.isFile()} />
      </View>
    );
  };

  useEffect(() => {
    //get user's file paths from react-native-fs
    setDownloadsFolder(RNFS.DownloadDirectoryPath);
    setDocumentsFolder(RNFS.DocumentDirectoryPath); //alternative to MainBundleDirectory.
    setExternalDirectory(RNFS.ExternalStorageDirectoryPath);

    // makeDirectory(folderPath);
    // makeDirectory(folderPath + '/images');
    // makeDirectory(folderPath + '/css');
    // makeDirectory(folderPath + '/js');
    // makeFile(
    //   folderPath + '/test.txt',
    //   "Why Programmer's wear glass? \n They can't c#! ",
    // );

    // makeFile(
    //     folderPath + '/dummy.js',
    //     "const a=20;\nconst b=10;\nconst c=a+b;\nconsole.log(c);",
    //   );

    readFile(folderPath + '/dummy.js');

    getFileContent(folderPath);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>StorageScreen</Text>
      <Text> Downloads Folder: {downloadsFolder}</Text>
      <Text>Documents folder: {documentsFolder}</Text>
      <Text>External storage: {externalDirectory}</Text>

      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />

      <Text>{fileData}</Text>

      <button
        title="delete"
        onClick={() => {
          const delFilePath = folderPath + '/' + files[files.length - 1];
          console.log(delFilePath);

        //   deleteFile(folderPath + '/' + files[files.length - 1].name);
        }}
      />
    </SafeAreaView>
  );
}

export default StorageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },

  heading: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
  },
});
