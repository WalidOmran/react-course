import { Routes, Route, Link } from 'react-router-dom';
import Gallery from './tasks/Gallery';
import Task2 from './tasks/task_02/Task2';
// import Task3 from './tasks/task_03/Task3';
import LastProducts from './tasks/task_04/last-products/LastProducts';
import BusinessCard from './tasks/business_card/BusinessCard';
import ToDoList from './tasks/to-do-list/ToDoList';
import Store from './store/Store';
import FilterableList from './tasks/search_bar/FilterableList';
// import './App.css';



function Main(){
  return(
    <div className='main'>
      <h1 className='main-title'>Tasks for Courses</h1>
      <div className='main-list'>
        <Link to='/Gallery' className='main-link'>Gallery</Link>
        <Link to='/Task2' className='main-link'>Task2</Link>
        <Link to='/Task4' className='main-link'>Task4</Link>
        <Link to='/BusinessCard' className='main-link'>Business Card</Link>
        <Link to='/ToDoList' className='main-link'>To Do List</Link>
        <Link to='/store' className='main-link'>Store</Link>
        <Link to='/FilterableList' className='main-link'>FilterableList</Link>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Task2' element={<Task2/>} />
        <Route path='/BusinessCard' element={<BusinessCard/>} />
        <Route path='/Task4' element={<LastProducts/>} /> 
        <Route path='/ToDoList' element={<ToDoList/>} /> 
        <Route path='/FilterableList' element={<FilterableList/>} /> 
      </Routes>
      {/* <ToDoList/> */}
      {/* <BusinessCard/> */}
    </div>
  );
}

export default App;
