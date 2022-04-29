import React,{useState,useEffect} from 'react'
import './Tour.css'


function Tour() {
  const[tour,setTour]=useState([]);
  const[submit,setSubmit]=useState(true);
  const[info,setInfo]=useState()
  const[clear,setClear]=useState(true)
  const handlesubmit=(id)=>{
    let dlt=tour.filter(tour=>tour.id!==id);
    setTour(dlt)
  }
  const handleclear=()=>{
     if(clear===true)
     {
       setClear(false)
     }
     else{
       setClear(true)
     }
  }
const reloade=()=>{
  fetch('https://course-api.com/react-tours-project')
   .then(response => response.json())
   .then(data=>setTour(data))
 
}
  
  useEffect(()=>{
    reloade()
  },[])
  console.log('tour',tour)
  return (
    <div className='body'>
 {tour.length>0?(
    <div>

        
          
    <div className='heading'>Our Tour</div>
    <div className='border'></div>
    <div className='map'>
      {tour.map(tours=><div className='map1'><div className='map2' key={tours.id}><img className='photo' src={tours.image}/><br/>
      <div className="name-price  d-flex justify-content-around">
      <span className='name'>{tours.name}</span>
      <span className='price'>${tours.price}</span><br/></div>
      <div className='info'><p>{clear?tours.info.slice(0,150):tours.info}<a className='readmore' onClick={handleclear}>....{clear?'Readmore':'Readless'}</a></p></div>
      <button className='notintrest' onClick={()=>handlesubmit(tours.id)}>Not Intreasted</button>
      </div></div>)}
    </div>
    </div>):(
    <h2 className='text '>NO TOURS AVAILABLE 
    <br/> 
<button className='refresh' onClick={()=>window.location.reload()}>REFRESH</button> 
</h2> 
)} 

  
    
    </div>
  )
}

export default Tour