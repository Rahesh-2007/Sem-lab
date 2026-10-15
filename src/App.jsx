import { useState } from "react";
function App(){
  const [flight,setflight]=useState([{name: "Emirates", source: "Kerala", dest: "USA", price: 45000.00}, 
    {name: "KingFisher", source: "Srilanka", dest: "Kerala", price: 50000.00}
  ])
  const [name,setname]=useState('')
  const [dest,setdest]=useState('')
  const [source,setsource]=useState('')
  const [price,setprice]=useState('')

  function Add(e){
    e.preventDefault();
    const user={
      name, source, dest, price
    }
    setflight([...flight, user]);
    setname("")
    setsource("")
    setdest("")
    setprice("")
  }

  function deleteby(id){
    setflight(flight.filter((_,i)=>(i!==id)))
  }

  function search(name){
    const user = [flight.map((c,i)=>(
      c.name===name
    ))]
  }
  return(
    <div>
      <form onSubmit={add}>
        <h4>Name: </h4><input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
         <h4>Source: </h4><input type="text" value={source} onChange={(e)=>setsource(e.target.value)}></input>
          <h4>Destination: </h4><input type="text" value={dest} onChange={(e)=>setdest(e.target.value)}></input>
           <h4>Price: </h4><input type="text" value={price} onChange={(e)=>setprice(e.target.value)}></input>
           <button type="submit">Submit</button>
      </form>

      { {flight.map((c,i)=><div><p>{c.name}--{c.source}---{c.dest}---{c.price}</p><button onClick={()=>deleteby(i)}></button> </div>)} }

       { <input type="text" onChange={()=>search(input)}></input> }
    </div> 
  )
}
export default App;