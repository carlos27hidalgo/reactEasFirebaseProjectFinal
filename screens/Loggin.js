import React, { useState } from 'react'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'
import { FIREBASE_AUTH } from '../FireConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function MyComponent({navigation}) {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const auth = FIREBASE_AUTH;

const signIn = async ()=>{
    setLoading(true);
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Login correcto');
        //navigation.navigate('Calculator', {name:'Calculator'})
        navigation.navigate('SnakeGame', {name:'SnakeGame'})
    }catch (error){
        console.log(error);
        alert('Registro fallido' + error.message)
    }finally{
        setLoading(false);
    }
}

/*
const signUp = async ()=>{
    setLoading(true);
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Revisa tu correo');
    }catch (error){
        console.log(error);
        alert('Registro fallido' + error.message)
    }finally{
        setLoading(false);
    }
}*/


  return (
    <View style={styles.container}>
        <Text >Login para continuar</Text>
        <Text></Text>
        <TextInput style={styles.input} value={email}
            placeholder='Email' autoCapitalize='none' 
            onChangeText={(text)=> setEmail(text)}
        ></TextInput>
        <TextInput style={styles.input} secureTextEntry={true} value={password}
            placeholder='Password' autoCapitalize='none' 
            onChangeText={(text)=> setPassword(text)}
        ></TextInput>
      <Button title="Login" style={[styles.button, styles.buttonSpacing]}   onPress={signIn} />
        <Text></Text>
      <Button title="Create user" style={[styles.button, styles.buttonSpacing]}  onPress={()=>navigation.navigate('Create', {name:'Create'})} />
     
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