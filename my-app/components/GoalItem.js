import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  // function deleteItemHandler (itemId) {
  //   props.deleteGoal(itemId)
  // }
  return (
    <View style={styles.goal}>
        <Pressable 
          onPress={props.deleteGoal.bind(this, props.id)}
          android_ripple={{color: '#dddddd'}}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goal: {
    marginBottom: 8,
    backgroundColor: '#f6f6f6',
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  pressedItem: {
    // for iOS
    backgroundColor: '#dddddd',
  },
  goalText: {
    fontSize: 20,
    color: 'gray',
    padding: 8,
  },
});

export default GoalItem;