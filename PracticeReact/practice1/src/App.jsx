import { useState } from 'react'
import "./DarkMode.css"

function App() {

  const [darkmode, setDarkMode] = useState(false);

  return (
    <div>
      <div className = {darkmode ? "light container" : "dark container"}>
        <h1>{darkmode ? "Light💡" : "DARK🌙"}Mode</h1>
        <p>현재 모드는 {darkmode ? "라이트모드" : "다크모드🌙"} 입니다.</p>
        <button className='toggle-btn' onClick={()=>setDarkMode(!darkmode)}>Light Change</button>
      </div>
    </div>
  )
}

export default App
