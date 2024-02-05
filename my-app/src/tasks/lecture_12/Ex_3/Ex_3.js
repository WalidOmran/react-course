import React from 'react'
import { useState } from 'react';
export default function Ex_3() {
  function handelEdit (){

  }
  function handelDelete() {

  }
  function handelAddTask(text){

  }
  return (
    <div>
      <AddTask onAddTask={handelAddTask}/>
      <TasksList handelEdit={handelEdit} handelDelete={handelDelete}/>
    </div>
  )
}

function AddTask({ onAddTask }){
  const [text, setText] = useState('');
  return(
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  );
}


function TasksList(handelEdit,handelDelete){
  return(
    <>
    {
      initialTasks.map((task)=> (
        <div key={task.id}>
          <span>{task.id} | </span>
          <span> {task.text} </span>
          <span>
            <button onClick={handelEdit}>Edit</button>
          </span>
          <span>
            <button onClick={handelDelete}>Delete</button>
          </span>
        </div>
      ))
    }
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];