import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

export default function GoalInput (props) {
  const [enteredText, setEnteredText] = useState('')

  const inputGoal = (inputText) => {
    setEnteredText(inputText)
  }

  function addGoalHandler () {
    if (enteredText === '' || enteredText === null) { return };
    props.onAddGoal(enteredText);
    setEnteredText('');
    props.closeModal();
  }
  
  return (
    <Modal visible={props.displayModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')} />
        </View>
        <TextInput 
          placeholder="Your goal..." 
          style={styles.textInput}
          onChangeText={inputGoal}
          value={enteredText} />
        <View style={styles.actionsWrapper}>
          <View style={styles.action}>
            <Button title="Cancel" onPress={props.closeModal} />
          </View>
          <View style={styles.action}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ddd',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    // marginHorizontal: '50%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 4,
    // flex: 1,
    // marginHorizontal: 16,
    paddingLeft: 10,
    paddingTop: 7,
    paddingBottom: 7,
    marginHorizontal: 16,
    wdith: '100%',
  },
  actionsWrapper: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    // marginHorizontal: 16,
  },
  action: {
    width: '30%',
    marginHorizontal: 8
  }
})