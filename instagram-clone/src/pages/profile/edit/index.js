import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from "./../../../routes/auth_context";

import profilePhoto from '../../../../assets/Oval.png'

const Edit = ({ navigation }) => {
  
  const {isLogedIn} = useContext(AuthContext);

  const [inputDataName, setInputDataName] = useState('');

  const touchInputName = (text) => {
    setInputDataName(text);
  };

  const [inputDataUserName, setInputDataUserName] = useState('');

  const touchInputUserName = (text) => {
    setInputDataUserName(text);
  };

  const [inputDataDescription, setInputDataDescription] = useState('');

  const touchInputDescription = (text) => {
    setInputDataDescription(text);
  };

  const touchButton = () => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: inputDataName, username: inputDataUserName, description: inputDataDescription})
    };

    fetch('https://my-json-server.typicode.com/caetanovns/demo/users/' + isLogedIn , requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    
    navigation.goBack()
  };

  return (
    <View style={styles.container}>

      <View style={styles.con0}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.textEditProfile}>Edit Profile</Text>

        <TouchableOpacity onPress={touchButton}>
          <Text style={styles.textDone}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.con1}>
        <Image
          style={styles.changeProfilePhoto}
          source={profilePhoto}
        />
        <Text style={styles.textChangeProfilePhoto}>Change Profile Photo</Text>
      </View>

      <View style={styles.con2}>

        <View style={styles.labelCon}>
          <Text style={styles.labelText}>Name</Text>
          <Text style={styles.labelText}>Username</Text>
          <Text style={styles.labelText}>Bio</Text>
        </View>

        <View style={styles.inputCon}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter name"
            onChangeText={touchInputName}
            value={inputDataName}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter username"
            onChangeText={touchInputUserName}
            value={inputDataUserName}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter bio"
            onChangeText={touchInputDescription}
            value={inputDataDescription}
          />
        </View>

      </View>

    </View>
  );
};

export default Edit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  con0: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    maxHeight: 50
  },
  con1: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    maxHeight: 200
  },
  con2: {
    flex: 3,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    maxHeight: 200,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.29)'
  },
  labelCon: {
    gap: 40,
    paddingHorizontal: 20
  },
  inputCon: {
    gap: 25
  },
  textCancel: {
    fontSize: 18
  },
  textEditProfile: {
    fontSize: 18,
    fontWeight: '600',
    paddingRight: 15
  },
  textDone: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3897F0'
  },
  changeProfilePhoto: {
    width: 120,
    height: 120
  },
  textChangeProfilePhoto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3897F0'
  },
  labelText: {
    fontSize: 18
  },
  textInput: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.29)',
    width: 230,
    height: 40
  }
});
