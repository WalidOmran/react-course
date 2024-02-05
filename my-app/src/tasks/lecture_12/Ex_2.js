import React, { useReducer } from 'react'
const INCREMENT_AGE = "INCREMENT_AGE",
      DECREMENT_AGE = "DECREMENT_AGE",
      CHANGE_NAME = "CHANGE_NAME", 
      data = { name: 'Taylor', age: 42 };
function reducer(state,action) {
    switch (action.type) {
        case INCREMENT_AGE:
          return {
            ...state,
            age: state.age + action.payload
          };
          case DECREMENT_AGE:
            return {
              ...state,
              age: state.age - action.payload
            };
            case CHANGE_NAME:
            return {
              ...state,
              name: action.nextName
            };
        default: 
            return state
            break;
    }
}
function Ex_2() {
  const [state, dispatch] = useReducer(reducer,data);
  function handleChange(e){
    dispatch({type:CHANGE_NAME , nextName: e.target.value})
  }
  function incrementAge(){
    dispatch({type: INCREMENT_AGE , payload: 1})
  }
  function decrementAge(){
    dispatch({type:DECREMENT_AGE , payload: 1})
  }
  return (
    <div>
      <input
        value={state.name}
        onChange={handleChange}
      />
      <div>
        <h1>{state.name}</h1>
        <h2>{state.age}</h2>
      </div>
      <button onClick={incrementAge }>Increment Age</button>
      <button onClick={decrementAge}>Decrement Age</button>
    </div>
  )
}

export default Ex_2
