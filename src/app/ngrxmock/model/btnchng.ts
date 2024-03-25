import { formreducer } from "../State/Reducer/forms-post.reducer";
import { Btnreducer } from "../State/Reducer/ngrx-mock.reducer";

export const appReducer ={
  btn :  Btnreducer,
  form : formreducer
}


export interface AppState{
  btn:Btnchng,
  form:FormState
}



export interface Btnchng {
    value : number;
    value1 : string;
    input1 : string;
}


export interface FormState {
  form: FormData[];
}

  export interface FormData {
    id?:number;
    firstName: string ;
    lastName: string;
    address: Address;
    aliases: Alias[];
  }
  
  export interface Address {
    street: string ;
    city: string ;
  }
  
  export interface Alias {
    val1: string ;
    val2: string ;
  }
  
