import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Book from './components/book';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
      <View style={styles.shopCard}>
      <Image style={styles.icon} source={require('./assets/shopIcon.png')} />
        <Text style={styles.amount}>1</Text>
      </View>
      <View style={styles.books}>
        <Book title={'Titel van het boek'} author={'by Steven'} description={'Hier komt een beschrijving.'} code={'ISBN 1287-9-4563-25-1'}/> 
        <Book title={'Titel van boek 2'} author={'by Lindsay'} description={'Dit is het tweede boek in de collectie. Het is een heel ander boek dan het eerste boek van de collectie.'} code={'ISBN 15679-8-4112-257-8'}/> 
        <Book title={'Dit is een ander boek'} author={'by Tom'} description={'Dit boek gaat over het schrijven van boeken en is hierdoor een informatief-historisch boek.'} code={'ISBN 3458-2-2366-44-6'}/> 
        <Book title={'Titel van het laatste boek'} author={'by Charlotte'} description={'Dit is het laatste boek van de collectie. In dit boek staat niets speciaals.'} code={'ISBN 1287-9-4563-25-1'}/>
      </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
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
  books: {
    backgroundColor: "#FFffFF",
    margin: 10,
    width: 350,
  }
});
