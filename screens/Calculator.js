import React, { useState } from 'react'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'
import { FIREBASE_DB } from '../FireConfig';
import {ref, set } from "firebase/database";

export default function Calculator({navigation, route}) {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');


    const sendResultToFirebase = (result) => {
        const REFERENCE = ref(FIREBASE_DB, 'calResults')
        set(REFERENCE, {
        //FIREBASE_DB.database().ref('calculatorResults').push({
          num1: parseFloat(num1),
          num2: parseFloat(num2),
          result: result,
          //timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      };

  
    const calculateSum = () => {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`Suma: ${sum}`);
      sendResultToFirebase(`Suma: ${sum}`);
    };
  
    const calculateDifference = () => {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(`Resta: ${difference}`);
      sendResultToFirebase(`Resta: ${difference}`);
    };
  
    const calculateProduct = () => {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(`Multiplicar: ${product}`);
      sendResultToFirebase(`Multiplicar: ${product}`);
    };
  
    const calculateQuotient = () => {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(`Division: ${quotient}`);
      sendResultToFirebase(`Division: ${quotient}`);
    };

  return(
    <View style={styles.container}>
    <Text>Ingrese los valores: </Text>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={(text) => setNum1(text)}
      value={num1}
      placeholder="Ingresa numero 1"
    />
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={(text) => setNum2(text)}
      value={num2}
      placeholder="Ingresa numero 2"
    />
    <View style={styles.buttonContainer}>
      <Button onPress={calculateSum} title="+" />
      <Button onPress={calculateDifference} title="-" />
      <Button onPress={calculateProduct} title="*" />
      <Button onPress={calculateQuotient} title="/" />
    </View>
    <Text style={styles.result}>{result}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: 20,
    },
    result: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
