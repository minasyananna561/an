import axios from 'axios'
let initialState={
  first:true,
  second:false,
  isrespons:[],
  isloading:false,
  iseerror:""
};

export const FirstReducer=(state=initialState,action)=>{
switch (action.type) {

  case "first": 
  return {
    ...state,
    first:action.first
  }
  case"second":
  return{
    ...state,
    second:action.second
  }
  case"isrespons":
  return{
    ...state,
    isrespons:action.isrespons
  }
  case"isloading":
  return{
    ...state,
    isloading:action.isloading
  }
  case"iserror":
  return{
    ...state,
    iseerror:action.iseerror
  }


  
  default: return state
  };
};

export let FirstCreator=()=> {
return {
  type:"first",
  first:false

  }
}
export let SecondCreator=()=> {
  return {
    type:"second",
    second:true
    }
  }
  export let ResponsCreator=(z)=> {
    return {
      type:"isrespons",
      isrespons:z
      }
    }
    export let LoadingCreator=(z)=> {
      return {
        type:"isloading",
        isloading:z
        }
      }
      export let ErrorCreator=(z)=> {
        return {
          type:"iseerror",
          iseerror:z
          }
        }
  
      
  
  
  export const ThunkeLoading=()=>async (dispatch)=>{
    try{
    
      dispatch (FirstCreator())
      let response = await  axios .get("https://finalspaceapi.com/api/v0/character/?limit=2")
      console.log(response.data)
       dispatch(ResponsCreator(response.data))
       dispatch(LoadingCreator())
       dispatch(SecondCreator())
      
    }
    catch(e){
    console.log(e.message)
    dispatch(LoadingCreator())
    dispatch(ErrorCreator(e.message))
    }
          }
       
