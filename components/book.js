import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

function click() {
    console.log("geklikt");
  }

const Book = (props) => {
    return (
        <View style={styles.boek}>
            <TouchableNativeFeedback onPress={() => click()}>
                <Text style={styles.titleBook}>{props.title}</Text>
            </TouchableNativeFeedback>
            <Text>{props.author}</Text>
            <Text>{props.description}</Text>
            <Text>{props.code}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    boek:{
        //backgroundColor: '#FFFFFF',
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomWidth: 3,
        borderColor: '#000000',
        borderStyle: 'dashed',
      },
      titleBook:{
        fontSize: 22,
      }
});
export default Book;