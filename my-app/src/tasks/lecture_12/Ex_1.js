import React from 'react'
import { useReducer } from 'react';
const INCREMENT = "INCREMENT",
      DECREMENT = "DECREMENT";
function reducer(state,action){
  switch (action.type) {
    case INCREMENT:
      return state + action.payload
      break;
    case DECREMENT:
      return state - action.payload
      break;
    default:
      return state
      break;
  }
}
function Ex_1() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <button onClick={()=> dispatch({type: INCREMENT , payload: 2})}>Increment</button>
      <h1>{count}</h1>
      <button onClick={()=> dispatch({type:DECREMENT , payload: 1})}>Decrement</button>
    </div>
  )
}

export default Ex_1
