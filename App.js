import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
      <Image source={require('./assets/shopIcon.png')} />
      <View style={styles.boek}>
        <Text style={styles.titleBook}>Dit is de titel van het boek</Text>
        <Text>By auteur</Text>
        <Text>Hier komt een korte beschrijving van de biografie van het boek. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
        <Text>ISBN 789-8-2165-1860-1</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    padding: 20,
    backgroundColor: '#fff',  
  },
  heading1: {
    fontSize: 32,
    fontWeight: '600',
  },
  boek:{
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#000000',
  },
  titleBook:{
    fontSize: 22,
  }
});
