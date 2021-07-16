import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, Touchable, TouchableOpacity, View, TextInput, Keyboard } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState();
  const [taskitems, settaskitems] = useState([]);
  
  const handeladdtask =() =>{
   Keyboard.dismiss();
   settaskitems([...taskitems,task])
   setTask(null);
  } 

  const deletetask =(index)=>{
    let itemcopy = [...taskitems];
    itemcopy.splice(index,1);
    settaskitems(itemcopy);
  }

  return (
    <View style={styles.container}>
      {/*Todays Task*/}

      <View style={styles.taskwrapper}>
          
          <Text style={styles.sectiontitle}>Today's task</Text>

          <View style={styles.items}>
            {/*there is where task will go*/}
            {
              taskitems.map((item,index)=> {
                return (
                  <TouchableOpacity onPress={()=>deletetask(index)}>
                  <Task  text={item} />
                  </TouchableOpacity>
              )
                 
              })
            }
             
          </View>

      </View>

     {/*write a task*/}
     <KeyboardAvoidingView
     behavior={Platform.OS==="ios"?"padding":"height"}
     style={styles.writetaskwrapper}>
       <TextInput style={styles.input} placeholder ={'Write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>
         <TouchableOpacity onPress={()=> handeladdtask()}>
           <View style={styles.addwrapper}>
             <Text style={styles.addtext}>+</Text>
           </View>
           </TouchableOpacity>    
     </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  
  sectiontitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  items: {
    marginTop: 30,
  },

  writetaskwrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    width: 60,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    
  },

  addwrapper: {
    width: 45,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addtext: {},
});
