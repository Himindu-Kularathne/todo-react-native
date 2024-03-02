
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Footer () {
    return(
        <View style = {styles.footerContainer}>
            <View style = {styles.createTodoContainer}>
            <Button title = "Create New Todo" />
            </View>
            
        </View>
    );
}

const styles =  StyleSheet.create({
    footerContainer : {
        display : "flex",
        flexDirection : "row",
        position : "absolute",
        bottom : 0,
        justifyContent : "space-between",
        backgroundColor : "blue",
        width : "100%",
        height : 100,
        padding: 20,
        opacity : 0.7,
    },
    createTodoContainer : {
       
        width : "100%",
        backgroundColor : "lightblue",
        justifyContent : "center",
        height : "100%",
        border: 20,
        borderRadius : 20,
        fontWeight:  "bold"
    },
   
}
    
)
