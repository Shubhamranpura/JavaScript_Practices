import { useState  , useEffect} from 'react'
import { ThameProvider } from './themecontext'

import './App.css'
import ThemeBtn from './componant/ThemeBtn'
import Card from './componant/Card'

function App() {
 
  
  const [pageTheame , setTheamMode] = useState("light")

  const setLightTheam = () =>{
    setTheamMode("light")
  }

  const setDarkTheam = () =>{
    setTheamMode("dark")
  }
  
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(pageTheame)
  }, [pageTheame])
  

  return (
    <ThameProvider value={{pageTheame,setLightTheam , setDarkTheam}} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto ">
            <Card />
          </div>
        </div>
      </div>
    </ThameProvider>
  )
}

export default App
