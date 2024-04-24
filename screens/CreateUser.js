
import React, { useState } from 'react'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'
import { FIREBASE_AUTH } from '../FireConfig';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { FIREBASE_DB } from '../FireConfig';
import {ref, set } from "firebase/database";



export default function MyComponentCreate({navigation}) {

const [email, setEmail] = useState('');
const [edad, setEdad] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const auth = FIREBASE_AUTH;

const sendCredsToFirebase = () => {
    const REFERENCE = ref(FIREBASE_DB, 'credentials')
    set(REFERENCE, {
    //FIREBASE_DB.database().ref('calculatorResults').push({
      correo: email,
      age: edad,
      pass: password,
      //timestamp: firebase.database.ServerValue.TIMESTAMP
    });
  };



const signUp = async ()=>{
    setLoading(true);
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Revisa tu correo');
        sendCredsToFirebase();
    }catch (error){
        console.log(error);
        alert('Registro fallido' + error.message)
    }finally{
        setLoading(false);
    }
}


  return (
    <View style={styles.container}>
        <Text >Ingresa tus datos para el registro</Text>
        <Text></Text>
        <TextInput style={styles.input} value={email}
            placeholder='Email' autoCapitalize='none' 
            onChangeText={(text)=> setEmail(text)}
        ></TextInput>
        <TextInput style = {styles.input} value={edad}
        placeholder='Edad' autoCapitalize='none'
        onChangeText={(text)=> setEdad(text)}
        ></TextInput>
        <TextInput style={styles.input} secureTextEntry={true} value={password}
            placeholder='Password' autoCapitalize='none' 
            onChangeText={(text)=> setPassword(text)}
        ></TextInput>
      
        <Text></Text>
      <Button title="Register user" style={[styles.button, styles.buttonSpacing]}  onPress={signUp} />
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      text: {
        fontSize: 20,
        marginBottom: 20,
      },
      input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      button: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ACDA5',
        marginBottom: 10,
      },
      buttonText: {
        fontSize: 18,
        color: 'white',
      },
      buttonSpacing: {
        marginBottom: 80,
      },
})