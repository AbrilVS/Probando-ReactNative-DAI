import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Vibration
} from 'react-native';


export default function App() {
  const [contador,setContador] = useState(0);
  const sumar = () => {
   
    setContador(contador+1);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>MARMOTAAAAAAAAAAAAAAAAAAAAA</Text>
      <Image
        source={require('./assets/marmota.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>{contador}</Text>
      <Button
        title="sumar"
        onPress={()=> setContador(contador+1)}
        color="green"   // <-- botón en verde
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',  // fondo rojo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
});
