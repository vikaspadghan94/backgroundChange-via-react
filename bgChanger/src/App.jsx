import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"> 
        <button 
        onClick={() => setColor("red")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}
        >Red</button>

        <button
        onClick={() => setColor("Green")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}
        >Green</button>

        <button
        onClick={() => setColor("Blue")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}
        >Blue</button>

        <button
        onClick={() => setColor("Maroon")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"maroon"}}
        >Maroon</button>

        <button
        onClick={() => setColor("orange")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"orange"}}
        >Orange</button>

<button
        onClick={() => setColor("grey")}
        className="ouline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"grey"}}
        >Grey</button>


        </div>
      </div>
    </div>
  )
}

export default App
