/*import React, { useReducer }  from "react";
import './App.css';
import Digitbutton from "./Digitbutton";
import Operationbutton from "./Operationbutton";

 export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION:'choose-operation', 
  CLEAR:'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE:'evaluate'
}

function reducer (state , {type,payload}){
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if(payload.digit==="0"&& state.currentoperand==="0") {return state}
      if(payload.digit==="."&& state.currentoperand.includes(".")) {return state}
      return {
        ...state , 
        currentoperand:`${ state.currentoperand ||""}${payload.digit }`,
      }
      case ACTIONS.CHOOSE_OPERATION:
        if(state.currentoperand==null && state.previousoperand == null ){
          return state
        }
        if(state.previosoperand == null){
          return{
            ...state,
            operation:payload.operation,
            currentoperand:null,
          }
        }
      case ACTIONS.CLEAR:
      return {}
  }

}

function App() {

  const[{currentoperand,previousoperand,operation},dispatch] = useReducer(reducer,{})

  dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit:1}})
   
return(
  <div className="calculator-grid">
  <div className="output">


    <div className="previous-operand">{previousoperand} {operation}</div>
    <div className="current-operand">{currentoperand}</div>
  </div>
  <button classname="span-two" onClick={ () =>dispatch({type: ACTIONS.CLEAR})}>AC</button>
  <button>DEL</button>
 <Operationbutton operation = "/" dispatch={dispatch}/>
  <Digitbutton digit = "1" dispatch={dispatch}/>
  <Digitbutton digit = "2" dispatch={dispatch}/>
  <Digitbutton digit = "3" dispatch={dispatch}/>
  <Operationbutton operation = "*" dispatch={dispatch}/>
  <Digitbutton digit = "4" dispatch={dispatch}/>
  <Digitbutton digit = "5" dispatch={dispatch}/>
  <Digitbutton digit = "6" dispatch={dispatch}/>
  <Operationbutton operation = "+" dispatch={dispatch}/>
  <Digitbutton digit = "7" dispatch={dispatch}/>
  <Digitbutton digit = "8" dispatch={dispatch}/>
  <Digitbutton digit = "9" dispatch={dispatch}/>
  <Operationbutton operation = "-" dispatch={dispatch}/>
  <Digitbutton digit = "." dispatch={dispatch}/>
  <Digitbutton digit = "0" dispatch={dispatch}/>
  <button className="span-two">=</button>
    </div> 
)
}
export default App;
*/








import React from 'react';
import "./App.css"; 
import Form from './Components/Form';

function App() {
  return (
    <div  className='form  center' id='form-parent'>
      <h2>Sign UP #06</h2>
        <Form/> 
    </div>
  )
}

export default App
