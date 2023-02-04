// import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button,
  Text,
} from "react-native";
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [showModal, setShowModal] = useState(false)

  const addGoalHandler = (enteredText) => {
    console.log('Add Goal: ', enteredText)
    setGoals(prev => [
      ...prev, 
      { id: Math.random().toString(), text: enteredText }
    ])
    console.log('Goals: ', goals)
  }
  const deleteGoalHandler = (id) => {
    // console.log('delete goal~')
    setGoals(prev => {
      return prev.filter((goal) => goal.id !== id)
    })
  }

  const openModal = () => {
    setShowModal(true)
  }

  const hideModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <View>
          <Text style={styles.heading}>My Goals</Text>
        </View>
        <GoalInput 
          onAddGoal={addGoalHandler} 
          displayModal={showModal}
          closeModal={hideModal}
        />
        <View style={styles.goalContainer}>
          <FlatList 
            data={goals} 
            renderItem={itemData => {
              return <GoalItem id={itemData.item.id} text={itemData.item.text} deleteGoal={deleteGoalHandler} />
            }} 
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
          {/* <ScrollView>
            {goals && goals.map((goal, index) => (
              <View key={index} style={styles.goal}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </ScrollView> */}
        </View>
        <Button title='Add New Goal' onPress={openModal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  goalContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: 28,
    paddingBottom: 16
  },
});
