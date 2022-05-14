import * as React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';

// import Container from './Container';

export default function ToDo() {
  const [isSelected, setSelection] = React.useState(false);
  return (
    <View style={style1.container}>
        <Text style={style1.title}>My To Do List</Text>
        <View style={style1.atas}>
    <TextInput
        // placeholder="useless placeholder"
        
        keyboardType="numeric"
        style={style1.inputText}
      />
    <TouchableOpacity style={style1.btnAdd}> 
    <Text style={{color:'white', fontWeight: "bold", fontSize:"15px"}}>Add</Text> </TouchableOpacity>
        </View>

    <View style={style1.toDo}>
        <Text style={style1.textTodo}>My Home Work</Text>
        
        <CheckBox
        value={isSelected}
        onValueChange={setSelection}
          style={style1.checkbox}
        />
    </View>
    <View style={style1.toDo}>
        <Text style={style1.textTodo}>My Home Work</Text>
        <CheckBox
          style={style1.checkbox}
        />
    </View>
    <View style={style1.toDo}>
        <Text style={style1.textTodo}>My Home Work</Text>
        <CheckBox
          style={style1.checkbox}
        />
    </View>
    <View style={style1.toDo}>
        <Text style={style1.textTodo}>My Home Work</Text>
        <CheckBox
          style={style1.checkbox}
        />
    </View>


    </View>
  );
}

const style1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height : "100%",
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding : 10
  },
    atas: {
        flexDirection  : 'row',
        marginTop : 40,
       
    },
    inputText: {
        backgroundColor : "#F3F0F0",
        width:280,
        height: 60,
        borderRadius: 20,
    },
    btnAdd : {
        backgroundColor : "#7C0F0F",
        width: 70,
        height: 60,
        marginLeft: 10,
        borderRadius: 20,
          justifyContent: "center" ,
          alignItems:"center"
    },
    title : {
        color: "white",
        fontSize : "17px",
        // fontWeight : "bold",
        textAlign : "center"

    },
    toDo : {
        backgroundColor: "#6D4848",
        width : 360,
        height : 60,
        marginTop : 20,
        borderRadius: 20,
        alignItems:"center",
        flexDirection  : 'row',
    },
    textTodo : {
        color : "white",
        fontWeight : "bold",
        fontSize : "15px",
        paddingLeft: "15px",
        maxWidth : "90%"
    },
    checkbox : {
        height: "25px",
        width : "25px",
        marginLeft: "170px"

    },
    delete : {
        backgroundColor : "#7C0F0F",
        width: 120,
        height: 50,
        marginLeft: 10,
        borderRadius: 10,
          justifyContent: "center" ,
          alignItems:"center"
    },

    bawah : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop : 100
         
    }
  });
  
