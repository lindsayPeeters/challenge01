import { StyleSheet, Text, View } from 'react-native';

const Book = (props) => {
    return (
        <View style={styles.boek}>
            <Text style={styles.titleBook}>{props.title}</Text>
            <Text>{props.author}</Text>
            <Text>{props.description}</Text>
            <Text>{props.code}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
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
export default Book;