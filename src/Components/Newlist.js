import React,{useState,useEffect} from 'react';
import styles from  './news.module.css'
import { useLocation,useHistory } from "react-router-dom";
import Zoom from 'react-reveal/Bounce'
export default function Newlist() {
  
const [na,setNa]= useState([]);
let history = useHistory();

    function getall(){
fetch('http://127.0.0.1:8000/api/show')
.then((res)=>res.json())
.then((resjson)=>{

    console.log("api",resjson);
    setNa(resjson);
})




    }
    function getclicked(number){
        history.push('/update',{
            id:number
        });
    }
    function getclick(number){
        fetch('http://127.0.0.1:8000/api/delete/'+number, {
            method: 'DELETE',
          })
.then((res)=>res.json())
.then((resjson)=>{

    console.log("api",resjson);
    window.location.reload();
  
})




    }
    useEffect(()=>{
        getall();
        },[]);
    return (
      <Zoom>
            <div>
            <h1 style={{margin:10,padding:10,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>From Laravel to React</h1>

            <table class="table table-bordered" style={{margin:10,padding:20}}>
        <tr style={{margin:10,padding:10}} >
       <th style={{margin:10,padding:20,color:"#000000" ,fontWeight:900,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}><h4>Name</h4></th>
       <th style={{margin:10,padding:20,color:"#000000" ,fontWeight:900,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}><h4>Email</h4></th> 
       <th style={{margin:10,padding:20,color:"#000000" ,fontWeight:900,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}} colSpan="2" ><h4>ACTION</h4></th> 
     </tr>
   {na.map((s)=>
     <tr>
       <td style={{margin:10,padding:20,color:"#22ffff",fontWeight:900,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>{s.name}</td>
       <td style={{margin:10,padding:20 ,color:"#22ffdd" ,fontWeight:900,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>{s.email}</td>
       <td style={{margin:10,padding:20,color:"#22ffee",fontSize:25 ,fontWeight:900,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}} onClick={()=>getclick(s.id)}><button type="button" class="btn btn-danger" >DELETE</button></td>
   
      <td style={{margin:10,padding:20,color:"#22ffee",fontSize:25 ,fontWeight:900,fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}} onClick={()=>getclicked(s.id)}><button type="button" class="btn btn-info" >UPDATE</button></td>
    


  </tr>
   )}
   </table>
        </div>
      </Zoom>
    )
}
