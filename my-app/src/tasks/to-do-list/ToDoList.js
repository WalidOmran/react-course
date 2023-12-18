import { useState } from "react";
import './to-do-list.css';
import remove from './img/icons8-remove-64.png';
import check  from './img/icons8-checked-50.png';
import done  from './img/icons8-checked-checkbox-50.png';
const initialTasks = [
    { id: 0, title: 'Complete homework', completed: false },
    { id: 1, title: 'Go to the gym', completed: false },
    { id: 2, title: 'Read a book', completed: false },
    { id: 3, title: 'Buy groceries', completed: false },
    { id: 4, title: 'Write a blog post', completed: false },
    { id: 5, title: 'Practice coding', completed: false },
    { id: 6, title: 'Call a friend', completed: false },
    { id: 7, title: 'Learn a new language', completed: false },
    { id: 8, title: 'Cook dinner', completed: false },
    { id: 9, title: 'Watch a movie', completed: false },
];

// const nextId = 9;
function ToDoList(){

    const [title,setTitle] = useState('');
    const [tasks,setTasks] = useState(initialTasks);
    const [insertId,setInsertId]= useState(tasks.length);
    
    function handelAdd(){
        const nextTask = [
            ...tasks.slice(0,insertId),
            {id: insertId, title:title},
            ...tasks.slice(insertId)
        ];
        setTasks(nextTask);
        setInsertId(tasks.length);
    }
    // function handelAdd(){
    //     setTasks( ...tasks,
    //         {id:1, title: title}
    //         )

    // }
    function handelDone(index){
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks)
    }
    function handleDelete(index){
        // console.log('index deleted : ' + index)
        // delete tasks[index];
        const newTasks = [...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
        setInsertId(tasks.length);
    }

    return(
        <div className="to-do-main">
            
            <div className="to-do-list">
                <h1 className="to-do-list_header">To Do List</h1>
                <div className="to-do-list_form">
                    <input className="to-do-list_input" value={title} onChange={e => { setTitle(e.target.value)}} />
                    <input className="to-do-list_input number--input" type="number"   value={insertId} onChange={e => { setInsertId(e.target.value)}} />
                    <button className="to-do-list_add-btn" onClick={handelAdd} >
                        Add Task</button>
                </div>
                <div className="to-do-list_list">
                    {tasks.map((item,index) => (
                        <div className={(!item.completed)? "to-do-list_list-item" : "to-do-list_list-item task--done"}  key={index}>
                            {/* <span>{index} </span> */}
                            <p className="to-do-list_list-title"> { item.title}</p>

                            <div>
                                <button onClick={() => {
                                    handelDone(index)
                                }} 
                                className="to-do-list_btn">
                                { (!item.completed ) ? <img src={done}/> : <img src={check}/>}
                                </button>
                                <button onClick={ () =>{
                                    handleDelete(index)
                                    }
                                }
                                    className="to-do-list_btn remove-btn">
                                    <img src={remove} alt="remove"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ToDoList