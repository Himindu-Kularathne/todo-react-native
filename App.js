import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';



export default function App() {

  const [todoList, setTodoList] = useState(
    [
      {id: 1 , title : "learn" , description : "machine leaning for 1 hr"},
      {id: 2 , title : "eat" , description : "have lunch with chiken and brinjal"},
      {id: 3 , title : "take a shower" , description : "take a shower before 4pm"},
      {id: 4 , title : "sleep" , description : "have a sleep after 11 pm"}
    ]
  )
  return (
    <View style={styles.container}>
      <View style ={styles.header} >
        {/* header */}
      </View>
      <View style = {styles.body}>
        {/* todo form */}
        <View >
        <FlatList
          data={todoList}
          renderItem={({item}) => 
            <Text>{item.description}</Text>
        }     
        />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
