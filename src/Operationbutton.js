import { ACTIONS } from "./App"
function  Digitbutton({dispatch , operation})
{
    return (<button onClick= {() => dispatch({type:ACTIONS.CHOOSE_OPERATION , payload:{operation}})}>{operation}</button>)

}export default Digitbutton;