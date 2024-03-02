import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';


export default function TodoItem ({item}) {

    return(
        <View style = {styles.todoItemContainer}>
            <View style = {styles.todoHeaderContainer}>
                <Text style = {styles.todoHeaderText} >{item.title}</Text>
            </View>
            <View style = {styles.todoBodyContainer}>
                <Text style = {styles.todoBodyText} >{item.description}</Text>
            </View>
        </View>
    );

}

const styles =  StyleSheet.create({
    
    todoItemContainer : {
        display : "flex",
        flexDirection: "row",
        
        height : 100,
        backgroundColor : "lightblue",
        borderWidth : 2,
        borderColor : "blue",
        borderRadius : 10,
        padding : 10,
        margin : 10,

        
    },

    todoHeaderContainer : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        width : "30%",
        padding : 10,
      
        borderRightWidth : 1,
        borderRightColor : "blue",
      
    },
    todoHeaderText : {
        fontSize : 20,
        fontWeight : "bold",
        color : "white",
    },
    
    todoBodyContainer : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        width : "70%",
        padding : 10,
       
    },
    todoBodyText : {
        fontSize : 20,
        color : "white",
        opacity : 0.7,
    }


}
    
)
