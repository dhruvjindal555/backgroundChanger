import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("black")


  return (
    <>
      <div className='w-full h-screen m-0 p-0' style={{ backgroundColor: color, color: "white" }}>
        <div className='left-40 bottom-10 rounded-xl absolute flex justify-center items-center w-3/4 h-10' style={{ backgroundColor: "white" }}>
          <div onClick={() => { setColor("red") }} className='w-13 px-3 text-center h-7 rounded-lg m-2' style={{ backgroundColor: "red" }}>Red</div>
          <div onClick={() => { setColor("Black") }} className='w-13 px-3 text-center h-7 rounded-lg m-2' style={{ backgroundColor: "Black " }}>Black</div>
          <div onClick={() => { setColor("Yellow") }} className='w-13 px-3 text-center h-7 rounded-lg m-2' style={{ backgroundColor: "Yellow", color: "black" }}>Yellow</div>
          <div onClick={() => { setColor("Green") }} className='w-13 px-3 text-center h-7 rounded-lg m-2' style={{ backgroundColor: "Green " }}>Green</div>

        </div>
      </div>
    </>
  )
}

export default App
