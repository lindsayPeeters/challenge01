import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function click(title) {
    console.log(title);
  }

const Book = (props) => {
    return (
        <View style={styles.boek}>
            <TouchableOpacity onPress={() => click(props.title)}>
                <Text style={styles.titleBook}>{props.title}</Text>
            </TouchableOpacity>
            <Text style={styles.author}>{props.author}</Text>
            <Text>{props.description}</Text>
            <Text style={styles.isbn}>{props.code}</Text>
            <TouchableOpacity style={styles.button} onPress={() => click(props.title)}>
                <Text style={styles.textButton}>Read</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    boek:{
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomWidth: 3,
        borderColor: '#000000',
        borderStyle: 'dashed',

      },
      titleBook:{
        fontSize: 22,
        fontWeight: 'bold',
      },
      author:{
        fontStyle: "italic",
        paddingVertical: 5,
      },
      isbn:{
        fontWeight: 'bold',
        paddingVertical: 5,
      },    
      button: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingVertical: 5,
        borderRadius: 5,
        width: 100,
        marginTop: 10,
      },
      textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
});
export default Book;