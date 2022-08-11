
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ThunkLoading } from "./Store/Reducers/InitialReducer";
import { ThunkeLoading } from "./Store/Reducers/FirstReducer";
import thunk from "redux-thunk";
import { useSpring, animated } from 'react-spring'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from  'react-loader-spinner'
import { SwapSpinner} from 'react-spinners-kit'
import { BallSpinner } from 'react-spinners-kit'

import {Cliplouer} from 'react-loader-spinner'




let App=()=>{
  let dispatch=useDispatch()
  let loader= useSelector(state=>state.UsersPage.isloading)
  let res= useSelector(state=>state.UsersPage.isrespons)
  console.log(res,"isrespons")
 let iserror=useSelector(state=>state.UsersPage.iserror)
  console.log(iserror,"iserror")
  const styles = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  })
  let first= useSelector(state=>state.UsersFirstPage.first)
  let second= useSelector(state=>state.UsersFirstPage.second)
  let isrespons= useSelector(state=>state.UsersFirstPage.isrespons)
  let isloading= useSelector(state=>state.UsersFirstPage.isloading)
  let iseerror= useSelector(state=>state.UsersFirstPage.iseerror)
  

  return <div className="App">
    {loader&&<div><BallSpinner />

  
</div>}
{res?.map((item,index)=>
<div key={index}>
<h1>{item?.name} {item?.status}</h1>
</div>)}
<div style={{color:"red"}}>{iserror}</div>
<button onClick={()=>dispatch(ThunkLoading())}>OK</button>
<animated.div className="test" style={styles}></animated.div>

 <button onClick={()=>dispatch(ThunkeLoading())}>OK</button>
{isloading&&<div><SwapSpinner />
</div>}
<div>{first}</div>
<div>{second}</div>
{isrespons?.map((item,index)=>
<div key={index}>
  <h1></h1>
</div>
)}
<div style={{color:"red"}}>{iseerror}</div> 

  </div>

}
export default App;
