import { useState } from 'react';

export default function Toggle() {
  
  const [isOn, setIsOn] = useState(false);
  return (
    <>
        <h2>Fix a component failing to re-render</h2>
        <br/>
        <button onClick={() => {
          setIsOn(!isOn)
          
        }}>
          {isOn ? 'On' : 'Off'}
        </button>
    </>
  );
}


/*

   **** old Code ****
   
    import { useRef } from 'react';

    export default function Toggle() {
    const isOnRef = useRef(true);

    return (
        <button onClick={() => {
        isOnRef.current = !isOnRef.current;
        }}>
        {isOnRef.current ? 'On' : 'Off'}
        </button>
    );
    }
*/
/*
Challenge 2 of 4: Fix a component failing to re-render 
This button is supposed to toggle between showing “On” and “Off”.
 However, it always shows “Off”. What is wrong with this code? Fix it.
*/