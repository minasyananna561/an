 import axios from "axios";

let initialState={
  isAuth:true,
  loading:false,
  isloading:false,
  isrespons:[],
  iserror:"",
  name:""
};

export const Reducer=(state=initialState,action)=>{
switch (action.type) {

  case "isauth": 
  return {
    ...state,
    isAuth:action.isauth
  }
  case"loading":
  return{
    ...state,
    loading:action.loading
  }

  case"isloading":
  return{
    ...state,
    isloading:action.isloading
  }
  case"isrespons":
  return{
    ...state,
    isrespons:action.isrespons
  }
  case"iserror":
  return{
    ...state,
    iserror:action.iserror
  }
  default: return state
  };
};



export let IsauthCreator=(x)=> {
return {
  type:"isauth",
  isauth:x

  }
}
export let loadingCreator=()=> {
  return {
    type:"isloading",
    isloading:true
  
    }
  }

  export let IsloadingCreator=()=> {
    return {
      type:"isloading",
      isloading:false
    
      }
    }
    export let IsauthRespons=(y)=> {
      return {
        type:"isrespons",
        isrespons:y
      
        }
      }
      export let IsError=(z)=> {
        return {
          type:"iserror",
          iserror:z
        
          }
        }
      
     

    export const ThunkLoading=()=>async (dispatch)=>{
try{

  dispatch (loadingCreator()) 
  



  let response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  //let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  

  console.log(response.data,25)
  dispatch(IsauthRespons(response.data))
  dispatch(IsloadingCreator())
  
}
catch(e){
console.log(e.message)
dispatch(IsloadingCreator())
dispatch(IsError(e.message))
}
      }
      
      