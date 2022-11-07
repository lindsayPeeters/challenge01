import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    padding: 16,
    backgroundColor: '#fff',  
  },
  heading1: {
    fontSize: 32,
    fontWeight: '600',
  },
});
