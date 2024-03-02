import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import Footer from './components/footer';

export default function App() {

  const [todoList, setTodoList] = useState(
    [
      {id: 1 , title : "learn" , description : "machine leaning for 1 hr"},
      {id: 2 , title : "eat" , description : "have lunch with chiken and brinjal"},
      {id: 3 , title : "take a shower" , description : "take a shower before 4pm"},
      {id: 4 , title : "sleep" , description : "have a sleep after 11 pm"},
      {id: 5 , title : "drint" , description : "drink plenty of water after 5pm"},
    ]
  )
  return (
    <View style={styles.container}>
      <View style ={styles.header} >
     < Header />
      </View>
      <View style = {styles.body}>
       
        <View >
          
        <FlatList
          data={todoList}
          renderItem={({item}) => 
            <TodoItem item = {item} />
        }     
        />
        </View>

      </View>
      
        <Footer />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#fff',
    width: "100%",
  },
 

});
