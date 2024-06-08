import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
  //counter is a variable and setCounter is a method
  //let counter = 15;

  const addValue = () => {
    setCounter(counter+1)
    // setCounter((prevCount) => prevCount+1)
    // setCounter((prevCount) => prevCount+1)
    // setCounter((prevCount) => prevCount+1)
    // setCounter((prevCount) => prevCount+1)
  }
  const removeValue = () => {
    if(counter === 0){
      return;  
    }
    setCounter(counter-1)
  }

  return (
   <>
   <h1>React course with hitesh {counter}</h1>
   <h2>Counter value : {counter} </h2>
   <button
   onClick={addValue}
   >Add Value</button>
   <button
   onClick={removeValue}
   >Remove Value</button>
   <p>Footer: {counter}</p>
   </>
  )
}

export default App
