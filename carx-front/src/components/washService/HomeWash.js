import {React,useState} from 'react'
import Wash from './PageOne/Wash'
import Confirmation from './PageTow/Confirmation'

export default function HomeWash() {
    const [view, setview] = useState('wash')
    var changeView=()=>{
        setview('confirmation')
    }
    if(view==='wash'){
   
        return(

            <Wash changeView={changeView}/>
        )
       
        
    
    }
    else if(view==='confirmation'){
        
        return(
<Confirmation/>
        )
            
            
         
    }
}
