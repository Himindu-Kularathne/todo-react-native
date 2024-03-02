
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function Header () {
    return(
        <View style = {styles.headerContainer}>
            <Text style = {styles.headerText} >MY TODO</Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    headerContainer :{      
        backgroundColor:"blue",
        width : "100%",
        height :150,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        opacity : 0.7,
        
    },
    
    headerText :{
        color: "white",
        fontSize : 30,
        fontWeight : "bold",
        marginTop : 50,
    }

}
    
)
