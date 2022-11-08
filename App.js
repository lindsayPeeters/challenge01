import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
      <View style={styles.shopCard}>
      <Image style={styles.icon} source={require('./assets/shopIcon.png')} />
        <Text style={styles.amount}>1</Text>
      </View>
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
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 56,
    padding: 20,
    backgroundColor: '#fff',  
  },
  heading1: {
    fontSize: 32,
    fontWeight: '600',
  },
  shopCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  icon: {
    height: 35,
    width: 35,
    resizeMode: "contain",
  },
  amount: {
    backgroundColor: "#e60f4b",
    color: "#ffffff",
    marginLeft: -10,
    paddingLeft: 7,
    paddingBottom: 2,
    paddingTop: 2,
    paddingRight: 7,
    borderRadius: 60,
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
