import React,{useState,useEffect} from 'react'
import Zoom from 'react-reveal/Zoom'
export default function Reqres() {
    const [pro,setPro]= useState([]);
function fetchres(){
    fetch('https://reqres.in/api/users?page=2')
    .then((res)=>res.json())
    .then((resjon)=>{
        setPro(resjon.data)
    })

}

useEffect(()=>{
fetchres();
},[])

    return (
        <Zoom>
     <div class="card" style={{flexDirection:"row"}}>
        
      
        {pro.map((item =>
        
        <div class="column">
        
        <div>
           <Zoom>
        
           <img src={item.avatar} class="img-thumbnail" alt="Responsive image" style={{padding:5,margin:20,height:150}}/>
           </Zoom> 
        <h5 style={{color:"#ffafaf",padding:20,margin:10}}>{item.email}</h5>
        <div></div>
        <div>
        <h5 style={{color:"#ffafaf",padding:20,margin:10}}>{item.first_name} {item.last_name}</h5>
        
        <div></div>
        
        </div>
         
        </div>
        
        </div>
        
        ))}
        
                    
                </div>


        </Zoom>
   
    )
}
