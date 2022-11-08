import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Book from './components/book';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
      <View style={styles.shopCard}>
      <Image style={styles.icon} source={require('./assets/shopIcon.png')} />
        <Text style={styles.amount}>1</Text>
      </View>
      <View style={styles.books}>
        <Book title={'Titel van het boek'} author={'by auteur'} description={'Hier komt een beschrijving.'} code={'ISBN 1287-9-4563-25-1'}/> 
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
  }
});
