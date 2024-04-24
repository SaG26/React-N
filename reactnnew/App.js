import React from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert} from "react-native";
import image from './assets/firma.png'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Image style={styles.image} source={image} ></Image>
      <TouchableOpacity 
      onPress={() => Alert.alert('Alert')} >
        <Text>Sorpresa</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alingItems: "center", backgroundColor: "blue", textAlign: "center"},
  title: { fontSize: 30, textAlign: "center"},
  image: {height: 200, width: 200, justifyContent: "center"},
});

export default App;
