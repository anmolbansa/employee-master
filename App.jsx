import { useState } from 'react'

import axios from "axios";
function App() {
  const[name,setname]=useState("");
  const[father_name,setfathername] = useState("");
  const[salary,setsalary] = useState();
  const[dob,setdob] = useState();
  const[doj,setdoj]=useState();
  const[address,setaddress]= useState("");
  const[designation,setdesignation]= useState("");
  const[department,setdepartment] = useState("");
 async function senddata(){
    try{
      const payload = {
        name:name,
        father_name:father_name,
        salary:salary,
        dob:dob,
        doj:doj,
        address:address,
        designation:designation,
        department:department,
      }
      try{
        const response = await axios.post("http://localhost:3000/api/send",payload);
        console.log("data send to localhost:3000....")
        console.log(response.data);
      }
      catch(err){
        console.log(err.response.data);
      }


    }
    catch(err){
      console.log(err.message);
    }

  }
  

  return (
  <>
     <h1> employee master</h1>
     <p><strong>enter your name:</strong> <input type = "text" id = "name" placeholder = "enter your name..." onChange={(e)=>{setname(e.target.value)}}></input></p>
     <p><strong>enter your father_name:</strong><input type = "text" id = "father_name" placeholder = "enter your father_name..." onChange = {(e)=>{setfathername(e.target.value)}}></input></p>
     <p><strong>enter your dob:</strong> <input type = "Date" id = "dob" placeholder = "enter your dob..." onChange = {(e)=>{setdob(e.target.value)}}></input></p>
     <p><strong>enter your doj:</strong><input type = "Date" id = "doj"  placeholder = "enter your doj.."onChange = {(e)=>{setdoj(e.target.value)}}></input></p>
     <p><strong>enter your salary:</strong><input type = "Number" id = "salary"  placeholder = "enter your salary..." onChange = {(e)=>{setsalary(e.target.value)}}></input></p>
     <p><strong>enter your address:</strong><input type="text"  id = "address"  placeholder = "enter your address..." onChange = {(e)=>{setaddress(e.target.value)}}/></p>
     <p><strong>enter your department:</strong><input type="text" id = "department"  placeholder = "enter your department..." onChange = {(e)=>{setdepartment(e.target.value)}}/></p>
     <p><strong>enter your designation</strong><input type = "text" id = "designation" placeholder = "enter your designation..." onChange = {(e)=>{setdesignation(e.target.value)}}></input></p>
     <p><button id = "submit" onClick = {senddata}>submit</button></p>

  </>
  );
   
}
export default App;
