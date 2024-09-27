import { useState } from "react";
function App() {
  const [color,setColor]= useState("");

  return (
     <div className="w-full h-screen duration-200 font-serif"
     style={{backgroundColor:color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex-wrap justify-center gap-5 shadow-lg bg-white  rounded-2xl px-2 py-2 " style={{gap:"10px ",display:"flex" }}>
          <button onClick={()=>setColor('red')} className="outline-none px-4  rounded-lg shadow-lg text-white " style={{backgroundColor:"red"}}>RED</button>
          <button onClick={()=>setColor('blue')} className="outline-none px-4  rounded-lg shadow-lg text-white" style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor('lime')} className="outline-none px-4  rounded-lg shadow-lg text-white" style={{backgroundColor:"lime"}}>lime</button>
          <button onClick={()=>setColor('gray')} className="outline-none px-4  rounded-lg shadow-lg text-white" style={{backgroundColor:"gray"}}>gray</button>
          <button  onClick={()=>setColor('yellow')} className="outline-none px-4  rounded-lg shadow-lg text-white" style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor('fuchsia')} className="outline-none px-4  rounded-lg shadow-lg text-white" style={{backgroundColor:"mediumvioletred"}}>fuchsia</button>
          <button onClick={()=>setColor('black')} className="outline-none px-4  rounded-lg shadow-lg text-white" style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>
     </div>
  )
}

export default App
