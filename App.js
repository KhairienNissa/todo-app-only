import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import TaskTodo from './src/component/taskTodo'


export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }


    return (
      <View style={style1.container}> 
            <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >   
          <Text style={style1.title}>My To Do List</Text>
   
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <TaskTodo text={item} /> 
                </TouchableOpacity>
              )
            })
          }
   </ScrollView>
  
  <KeyboardAvoidingView style={style1.bawah}>
  <TextInput placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}
          // placeholder="useless placeholder"
    
          style={style1.inputText}
        />
          <TouchableOpacity style={style1.btnAdd} onPress={() => handleAddTask()}> 
      <Text style={{color:'white', fontWeight: "bold", fontSize:"15px"}}>Add</Text> </TouchableOpacity>
  </KeyboardAvoidingView>
  
      </View>
    );
  }
  
  const style1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      height : "100%",
      alignItems: 'center',
      padding : 10
    },
      bawah: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputText: {
          backgroundColor : "#F3F0F0",
          width:290,
          borderRadius: 15,
          paddingVertical: 15,
          paddingHorizontal: 15,
      },
      btnAdd : {
          backgroundColor : "#7C0F0F",
          width: 70,
          height: 50,
          marginLeft: 10,
          borderRadius: 15,
            justifyContent: "center" ,
            alignItems:"center"
      },
      title : {
          color: "white",
          fontSize : "17px",
          // fontWeight : "bold",
          textAlign : "center",
          marginBottom : 30,
  
      },
      toDo : {
          backgroundColor: "#6D4848",
          width : 360,
          marginTop : 15,
          borderRadius: 20,
          alignItems:"center",
          flexDirection  : 'row',
          padding: 17,
          justifyContent: 'space-between',
      },
      textTodo : {
          color : "white",
          fontSize : "15px",
          paddingLeft: "15px",
          maxWidth : "80%",
          flexWrap: 'wrap'
      },
      checkbox : {
          height: "10px",
          width : "10px",
          marginRight : '15px',
          backgroundColor: 'white',
          opacity : 0.4,
          borderRadius: 5
  
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
  
      // bawah : {
      //     flex : 1,
      //     alignItems: 'center',
      //     justifyContent: 'flex-end',
      //     marginTop : 100
           
      // }
    });
    
  